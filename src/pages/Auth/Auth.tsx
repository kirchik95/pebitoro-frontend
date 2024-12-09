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
      <div className={s.layout}>
        <main className={s.main}>
          <div className={s.header}>
            <Logo />
          </div>
          <Container>
            <div className={s.wrapper}>
              <div className={s.header}>
                <Title className={s.title} size="md">
                  Welcome back
                </Title>
                <Text className={s.subtitle} size="md">
                  Please enter your details
                </Text>
              </div>

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
                  <Button className={s.button} size="lg" type="submit">
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
        </main>
      </div>
    </div>
  );
};
