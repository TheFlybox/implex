import React from 'react';
import { LoginScreen, Page, List, ListInput, LoginScreenTitle, Button, BlockFooter, Block, Link, ListItem, Icon, ListButton } from 'framework7-react';
import LogoImage from 'url:../assets/logo3.png';

const AuthLogin = (props: any): any => {
    return(
        <LoginScreen className="main-login-screen" opened={true}>
            <Page loginScreen colorTheme="black" className="login-page">
                <div className="top-section">
                    <img src={LogoImage} alt="logo" className="logo" />
                    
                </div>
                <Block>
                    <h1 className="h1">Bienvenido, a.</h1>
                    <h2 className="h2">Ingresa tus credenciales</h2>
                </Block>
                <List form>                   
                    <ListInput clearButton label="Correo electronico" type="email" placeholder="john_smith@email.com">                        
                    </ListInput>
                    <ListInput clearButton label="Contraseña" type="password" placeholder="••••••••">                        
                    </ListInput>
                    <ListItem>
                        <Link text="¿Olvidaste tu contraseña?" />
                    </ListItem>
                </List>
                <List>
                    <Block>
                        <Button fill raised large>Iniciar sesion</Button>                        
                    </Block>
                    <Block>
                        <BlockFooter>
                            No tienes una cuenta? <Link text="Registrate"></Link>
                        </BlockFooter>
                    </Block>
                </List>
            </Page>
        </LoginScreen>
    );
}

export default AuthLogin;