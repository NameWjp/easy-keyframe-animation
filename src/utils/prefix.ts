const elementStyle = document.createElement('div').style;

function transformCamel(str: string) {
  return str.replace(/^-/, '').replace(/-([a-z]|[0-9])/ig, (_all, letter: string) => {
    return letter.toUpperCase();
  });
}

export const prefix = (() => {
  if (elementStyle.animation !== undefined) {
    return '';
  }

	const animationNames: { [key: string]: any } = {
		'-webkit-': 'webkitAnimation',
		'-moz-': 'mozAnimation',
		'-o-': 'oAnimation',
		'-ms-': 'msAnimation',
	};

	for (const key in animationNames) {
    if (animationNames.hasOwnProperty(key) && elementStyle[animationNames[key]] !== undefined) {
      return key;
    }
	}

	return '';
})();

export function prefixStyle(style: string): string {
  return prefix + style;
}

export function prefixStyleCamel(style: string): string {
  return transformCamel(prefix + style);
}
