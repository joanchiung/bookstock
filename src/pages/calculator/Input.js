export default function Inputs(props) {
    const { name, onChange, type } = props;
    return (
        <input 
            name={name} 
            type={type} 
            onChange={onChange} 
            min="0.00" 
            step="0.01" 
            className="input-frame" />
    ); 
}


