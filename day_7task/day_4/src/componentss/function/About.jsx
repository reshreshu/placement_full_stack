const About=(props)=>{
    return (
        <section>
            <h2 style={{textAlign:"center"}}>learning topics</h2>
            <h1>this is my about page</h1>
            <h1> im teaching in {props.college}</h1>
            <h1>other colleges{props.clg1}{props.clg2} </h1>
        </section>
    );
}
export default About;