//actions类型
export const TOGGLE_PANEL = 'TOGGLE_PANEL'
export const CLOSE_PANEL = 'CLOSE_PANEL'


//创建action对象字面量
export function togglePanel(isOpened){
	return {type: TOGGLE_PANEL, isOpened}
}

export function closePanel(isClosed){
	return {type: CLOSE_PANEL, isClosed}
}