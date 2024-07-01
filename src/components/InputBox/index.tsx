import React, { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, forwardRef } from 'react';
import './style.css';

//        interface: Input Box 컴포넌트 Propperties       // 
interface Props{
    label: string;
    type: 'text' | 'password';
    placeholder: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;//value를 바꾸는 함수
    error: boolean;

    icon?: 'eye-light-off-icon' | 'eye-light-on-icon' | 'expand-right-light-icon';
    onButtonClick?: () => void;

    message?: string;

    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}
//        component: Input Box 컴포넌트        //
const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => { 
    //user ref를 사용하기 위해서 -> Input Element를 직접적으로 control하기 위해서 사용

//        state: propperties        //
const {label, type, placeholder, value, error, icon, message} = props;
const {setValue, onButtonClick, onKeyDown} = props;

//        event handler: input 값 변경 이벤트 처리 함수        //
const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
}

//        event handler: input 키 이벤트 처리 함수        //
const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) =>{
    if(!onKeyDown) 
        return;
    onKeyDown(event);
}

//        render: Input Box 컴포넌트        //
return(
    <div className='inputbox'>
        <div className='inputbox-label'>{label}</div>
        <div className={error? 'inputbox-container':'inputbox-container-error'}>
            <input  ref={ref} className='input' type={type} placeholder={placeholder} 
            value={value} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
            {onButtonClick !== undefined && 
                <div className='icon-button' onClick={onButtonClick}>
                    {icon !== undefined && <div className={`icon ${icon}`}></div>}
                </div>
            }
        </div>
        {message !== undefined && <div className='inputbox-message'>{message}</div>}
    </div>
)
});

export default InputBox;