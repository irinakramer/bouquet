const Flavor = (props) => {
    
    return (
        <li><img src={process.env.PUBLIC_URL + `/images/${props.value}.png`} />{props.value}</li>
    )
}

export default Flavor;