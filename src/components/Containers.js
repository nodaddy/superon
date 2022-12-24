export const FlexBox = (props) => {
    const { children, style, justifyContent, onClick } = props;
    return (
        <div style={{
            ...style,
            display: 'flex',
            justifyContent: justifyContent ? justifyContent : 'center',
        }}
        onClick={()=>{
            if(onClick) {
                onClick()
            }
        }}
        >
            { children }
        </div>
    )
}