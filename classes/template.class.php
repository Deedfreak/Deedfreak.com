<?php
/*
Template class 2.0
Build by Jort van Breda
*/

class Template
{
	private
		$file,
		$subs,
		$parent = array(),
		$blockContent,
		$assigns,
		$output,
		$browser;
		// Not in use anymore
		/*$blockStartDelim	= '<!-- ',	// block start delimiter
		$blockEndDelim		= '-->',	// block end delimiter
		$blockStartWord		= 'BEGIN:',	// block start word
		$blockEndWord		= 'END:',	// block end word
		$tagStartDelim		= '{',		// tag start delimiter
		$tagEndDelim		= '}';		// tag end delimiter*/


	public function __construct($file)
	{
		//$this->browser_info();
		$this->file = $file;
		$this->filter();
 	}

 	private function filter()
 	{
		if(!file_exists($this->file))
		{
			die('File: "'.$this->file.'" could not be found.');
		}
  	$fileContent = file_get_contents($this->file);

		$fileContent = $this->checkforTemplates($fileContent);

  	$this->checkforBlocks($fileContent);
	}

	private function checkforTemplates($content)
	{
		preg_match_all("/\[template\='(.*?)'\]/is", $content, $templates, PREG_SET_ORDER);
		if(sizeof($templates) > 0)
		{
			foreach($templates as $v)
			{
				$tmp_tpl = new Template($_SERVER["DOCUMENT_ROOT"] . '/' . $v[1]);
				$tmp_tpl->parse('main');
				$content = str_replace($v[0], $tmp_tpl->implement(), $content);
			}
		}
		return $content;
	}

	private function checkforBlocks($content, $parent='', $l = 0)
	{
		$start = 0;
		$offset = 0;
		$bsd = '<!-- BEGIN:';

		while(is_integer($start))
		{
			$start = strpos($content, $bsd, $offset);

			if(is_integer($start))
			{


				$blocknameOffset = $start + strlen($bsd);
				$blockname = substr($content, $blocknameOffset, (strpos($content, ' ', $blocknameOffset) - $blocknameOffset));

				//echo str_repeat('&nbsp;', $l * 4) . "Found block: " . $blockname . "<br />";

				$blockStart = strpos($content, '-->', $blocknameOffset) + strlen('-->');
				$blockEnd = strpos($content, '<!-- END:' . $blockname . ' ' . '-->', $blockStart);
				$this->blockContent[$blockname] = substr($content, $blockStart, $blockEnd - $blockStart);

				$this->parent[$blockname] = $parent;
				if(!empty($parent))
				{
					$this->subs[$parent][] = $blockname;
					$this->removeSub($parent, $blockname);
				}
				$this->checkforBlocks($this->blockContent[$blockname], $blockname, $l + 1);

				$blockEnd = '<!-- END:' . $blockname . ' ' . '-->';
				$offset = strpos($content, $blockEnd, $offset);
			}
		}
	}

	private function removeSub($parent, $blockname)
	{
		$c = $this->blockContent[$parent];
		$s = strpos($c, '<!-- BEGIN:' . $blockname . ' ' . '-->');
		$e = strpos($c, '<!-- END:' . $blockname . ' ' . '-->') + strlen('<!-- END:' . $blockname . ' ' . '-->');
		if($e == strlen('<!-- END:' . $blockname . ' ' . '-->'))
		{
			die("Block(" . $blockname . ") not closed!");
		}
		$this->blockContent[$parent] = substr($c, 0, $s) . "{BLOCK:" . $blockname . "}" . substr($c, $e);
	}

	public function assign($blockname, $tag, $content)
	{
		$this->assigns[$blockname][$tag] = $content;
	}

	public function assignTemplate($blockname, $tag, $template)
	{
		$tmp_t = new Template($_SERVER['DOCUMENT_ROOT'] . '/' . $template);
		$tmp_t->parse('main');
		$this->assigns[$blockname][$tag] = $tmp_t->implement();
	}

	public function parse($blockname = '')
	{
		if(empty($blockname))
		{
			echo $this->getcontent();
		} else {
			$this->buildOutput($blockname);
		}
	}

	public function implement()
	{
		return $this->getcontent();
	}

	private function getcontent()
	{
		$c = '';
		foreach($this->parent as $k => $v)
		{
			if(empty($v) && isset($this->output[$k]))
			{
				$c .= $this->output[$k];
			}
		}
		//$c = str_replace(array("\n", "\r"), "", $c);

		return $c;
	}

	private function buildOutput($blockname)
	{
		$output = $this->blockContent[$blockname];
		if(isset($this->assigns[$blockname]))
		{
			foreach($this->assigns[$blockname] as $k => $v)
			{
				$output  = str_replace('{'.$k.'}', $v, $output);
			}
		}

		if(isset($this->subs[$blockname]))
		{
			foreach($this->subs[$blockname] as $k => $v)
			{
				if(isset($this->output[$v]))
				{
					$output = str_replace('{BLOCK:' . $v . '}', $this->output[$v], $output);
					unset($this->output[$v]);
				} else {
					$output = str_replace('{BLOCK:' . $v . '}', '', $output);
					//$output = str_replace('{BLOCK:' . $v . '}', '<!-- No output found for block: ' . $v . ' -->', $output);
				}
			}
		}

		if(isset($this->output[$blockname]))
		{
			$output = $this->output[$blockname] . $output;
		}
		$this->output[$blockname] = $output;
	}

	private function browser_info($agent=null)
	{
		$known = array('msie', 'firefox', 'safari', 'webkit', 'opera', 'netscape',
		'konqueror', 'gecko');

		$agent = strtolower($agent ? $agent : $_SERVER['HTTP_USER_AGENT']);
		$pattern = '#(?P<browser>' . join('|', $known) . ')[/ ]+(?P<version>[0-9]+(?:\.[0-9]+)?)#';

		if (!preg_match_all($pattern, $agent, $matches))
		{
			$this->browser = array();
		}

		$i = count($matches['browser'])-1;
		$this->browser = array($matches['browser'][$i] => $matches['version'][$i]);
	}
}
?>