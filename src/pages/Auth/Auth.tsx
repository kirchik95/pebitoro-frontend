import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router';
import cn from 'classnames';

import { useAppDispatch } from '@core/redux/hooks';

import { Container } from '@components/layout/Container';
import { Text } from '@components/typography/Text';
import { Title } from '@components/typography/Title';
import { Button } from '@components/ui/Button';
import { Input } from '@components/ui/Input';
import { Logo } from '@components/ui/Logo';

import { signIn } from './store/actions';

import s from './Auth.module.css';

interface AuthProps {
  className?: string;
}

type FormInput = {
  email: string;
  password: string;
};

export const Auth = ({ className }: AuthProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      const response = await dispatch(signIn(data)).unwrap();

      localStorage.setItem('token', JSON.stringify(response.token));

      void navigate('/', { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={cn(s.root, className)}>
      <Container>
        <div className={s.wrapper}>
          <Logo />
          <Title className={s.title}>Log in to your account</Title>
          <Text className={s.info}>Welcome back! Please enter your details.</Text>

          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
              className={s.inputWrapper}
              label="Email"
              placeholder="Enter your email"
              {...register('email', { required: true })}
            />
            <Input
              className={s.inputWrapper}
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register('password', { required: true })}
            />

            <div className={s.actions}>
              <Button className={s.button} type="submit">
                Sign in
              </Button>
            </div>
          </form>

          <div className={s.signup}>
            <span>{"Don't have an account?"}</span>
            <NavLink className={s.link} to="/signup">
              Sign up
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
};
