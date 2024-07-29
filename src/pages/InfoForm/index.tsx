import React, {FormEvent, useState} from "react";
import { useNavigate } from "react-router-dom";

function InfoForm() {

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    class User {
        name: string;
        company: string;
        email: string;

        constructor(name: string, company: string, email: string) {
            this.name = name;
            this.company = company;
            this.email = email;
        }
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        localStorage.setItem(
            "user", JSON.stringify(new User(name, company, email))
        )
        navigate("/info")

    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <span>Name:</span>
                <input onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
                <span>Company:</span>
                <input onChange={(e) => setCompany(e.target.value)}></input>
            </div>
            <div>
                <span>E-mail:</span>
                <input onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <button>Save</button>
        </form>
            <br/>
            <span>{name}</span><br/>
            <span>{company}</span><br/>
            <span>{email}</span><br/>
        </div>
    )
}


export {InfoForm}