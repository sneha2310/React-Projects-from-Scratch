import '../css/Textform.css';
export default function Textform(props){
    return (
    <div className='container'>
    <form>
        <div className="form-group">
            <h3>{props.heading}</h3>
            {/* <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */}
            <textarea name="email" id="" cols="70" rows="20"></textarea>
            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <button type="submit" className="btn btn-success">CONVERT INTO UPPERCASE</button>
    </form>
    </div>
    );
}