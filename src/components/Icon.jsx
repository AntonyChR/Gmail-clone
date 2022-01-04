const Icon = ({icon, color='', size=20, pointer=false, click=()=>{}}) => {
    const styles = {
        fonstSize:size,
        color:color,
        cursor:pointer? 'pointer':'default'  
    }
    return (
        <span onClick={()=>click()} className='material-icons' style={styles}>
            {icon}
        </span>
    )
}

export default Icon
