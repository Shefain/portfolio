

const Contact = () => {
    return ( 
        <section>
            <form className="flex flex-col">
                <input type="name" className="outline-none bg-secondary" />
                <input type="email" className="outline-none bg-secondary" />
                <input type="textarea" value='explain your thought' className="outline-none bg-secondary" />
            </form>
        </section>
     );
}
 
export default Contact;