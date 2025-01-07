import {Controller, useForm} from "react-hook-form";
import Input from "../../../shared/ui/input";
import AuthByTelegram from "../../../features/auth/by-tg";
import Button from "../../../shared/ui/button";
import './style.scss'
import {mockAuth} from "../../../shared/api/mock-auth.ts";

type FormData = {
    email: string;
    password: string;
    repeat_password: string;
}

const Reg = () => {
    const {control, handleSubmit} = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log(data);
        // TODO: logic
        mockAuth()
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={'reg'}
        >
            <h1>РЕГИСТРАЦИЯ</h1>
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
            <Controller
                render={({field}) => (
                    <Input
                        value={field.value}
                        onChange={field.onChange}
                        placeholder={'Повторите пароль*'}
                    />
                )}
                rules={{required: true}}
                name={'repeat_password'}
                control={control}
            />
            <div className={'reg_addon'}>
                <AuthByTelegram title={'Зарегистрироваться с помощью Telegram'}/>
                <Button type={'submit'} className={'reg_button'}>
                    ЗАРЕГИСТРИРОВАТЬСЯ
                </Button>
            </div>
        </form>
    );
};

export default Reg;