export const FlexBox = (props) => {
    const { children, style, justifyContent } = props;
    return (
        <div style={{
            ...style,
            display: 'flex',
            justifyContent: justifyContent ? justifyContent : 'center',
        }}>
            { children }
        </div>
    )
}