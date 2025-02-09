import {Controller, useForm} from "react-hook-form";
import Input from "../../../shared/ui/input";

import './style.scss'
import AuthByTelegram from "../../../features/auth/by-tg";
import Button from "../../../shared/ui/button";
import {Link} from "react-router-dom";
import {mockAuth} from "../../../shared/api/mock-auth.ts";

type LogInForm = {
    email: string,
    password: string,
}

const Login = () => {
    const {control, handleSubmit} = useForm<LogInForm>({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = (data: LogInForm) => {
        console.log(data);
        // TODO: потом сделать
        localStorage.setItem('user_name', data.email)
        mockAuth()
    }

    return (
        <form
            className={'login'}
            onSubmit={handleSubmit(onSubmit)}
        >
            <h1>вход</h1>
            <div className={'login_form'}>
                <Controller
                    render={({field}) => (
                        <Input
                            value={field.value}
                            onChange={field.onChange}
                            placeholder={'Введите e-mail*'}
                        />
                    )}
                    rules={{required: true}}
                    name={'email'}
                    control={control}
                />
                <Controller
                    render={({field}) => (
                        <Input
                            value={field.value}
                            onChange={field.onChange}
                            placeholder={'Введите пароль*'}
                        />
                    )}
                    rules={{required: true}}
                    name={'password'}
                    control={control}
                />
            </div>
            <div className={'login_addon'}>
                <AuthByTelegram title={'Войти с помощью Telegram'}/>
                <Button type={'submit'}>
                    ВОЙТИ
                </Button>
                <Link to={'/auth/reg'}>
                    Ещё не зарегистрированы?
                </Link>
            </div>
        </form>
    );
};

export default Login;