export const CLICK_TAB = 'CLICK_TAB'

//构造action字面量
export function clickTab(tabIndex){
	return {type: CLICK_TAB, tabIndex}
}