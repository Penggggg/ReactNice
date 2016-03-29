//actions类型
export const CHANGE_VALUE = "CHANGE_VALUE"
export const CHANGE_STRIPED = "CHANGE_STRIPED"
export const CHANGE_TEXT = "CHANGE_TEXT"
export const CHANGE_ACTIVE = "CHANGE_ACTIVE"
export const CHANGE_COLOR = "CHANGE_COLOR"

//其他常量
export const ProcessColors = {
	progressBarSuccess: 'progress-bar-success',
	progressBarInfo: 'progress-bar-info',
	progressBarWarning: 'progress-bar-warning',
	progressBarDanger: 'progress-bar-danger'
}

//根据acions类型创建action
export function changeValue(value){
	return {type: CHANGE_VALUE, value}
}

export function changeStriped(isStriped){
	return {type: CHANGE_STRIPED, isStriped}
}

export function changeText(isText){
	return {type: CHANGE_TEXT, isText}
}

export function changeActive(isActive){
	return {type: CHANGE_ACTIVE, isActive}
}

export function changColor(colorType){
	return {type: CHANGE_COLOR, colorType}
}