import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";

export default function Signin() {
    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState("");

    const isInvalid = password === "" || emailAddress === "";
    const handleSignin = (event) => {
        event.prevetDefault();
    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignin} method='POST'>
                        <Form.Input
                            placeholder='Email Address'
                            value={emailAddress}
                            onChange={({ target }) =>
                                setEmailAddress(target.value)
                            }
                        />
                        <Form.Input
                            type='password'
                            autoComplete='off'
                            placeholder='Password'
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                    </Form.Base>
                    <Form.Submit disabled={isInvalid} type='submit'>
                        Sign In
                    </Form.Submit>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}
