import styled from "styled-components";

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        
        background: var(--input-background);
        border: 1px solid var(--input-border);

        font-weigth: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        border: none;
        border-radius: 0.2rem;
        margin-top: 1.5rem;
        color: #fff;
        font-size: 1rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }

`;