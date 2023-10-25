import { useState } from "react";
import { useAuth } from '../../hooks/auth'
import { Container, Form, Avatar } from "./style";
import { FiArrowLeft } from "react-icons/fi"
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/button"
import { Link } from "react-router-dom"
import { api } from "../../services/api"
import AvatarPlaceHolder from "../../assets/avatar_placeholder.svg" 

export function Profile({icon: Icon}) {

    const { user, updateProfile } = useAuth();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceHolder;
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate() {
        const user = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        }
        await updateProfile({ user, avatarFile })
    }

    async function handleChangeAvatar(event) {
        const file = event.target.files[0];

        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);

        setAvatar(imagePreview);

    }

    


    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form action="">
                <Avatar >
                    <img src={avatar} />
                    <label htmlFor="avatar">
                    <FiCamera />
                    <input id="avatar" type="file" onChange={handleChangeAvatar}/>
                    </label>

                </Avatar>
                <Input 
                placeholder="Nome"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}

                />

                <Input 
                    placeholder="E-mail"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}

                />

                <Input 
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setOldPassword(e.target.value)}
                    
                />

                <Input 
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setNewPassword(e.target.value)}

                />

                <Button title="Salvar" onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}