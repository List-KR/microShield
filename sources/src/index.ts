let Message = 'microShield userscript is deprecated. Please remove it and use tinyShield instead.'
Message += '\n\nmicroShield 유저스크립트는 더 이상 지원되지 않습니다. 제거해주시고 대신 tinyShield를 사용해주세요.' 

if (confirm(Message)) {
	location.href = 'https://github.com/List-KR/tinyShield'
}