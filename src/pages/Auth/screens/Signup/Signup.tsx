import { useFormStatus } from 'react-dom';
import { useNavigate } from 'react-router';
import cn from 'classnames';

import { useAppDispatch } from '@core/redux/hooks';

import { Text } from '@components/typography/Text';
import { Title } from '@components/typography/Title';
import { Button } from '@components/ui/Button';
import { Icon } from '@components/ui/Icon';
import { Input } from '@components/ui/Input';
import { Logo } from '@components/ui/Logo';

import { signUp } from '@pages/Auth/store/actions';

import s from './Signup.module.css';

interface SignupProps {
  className?: string;
}

export const Signup = ({ className }: SignupProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const status = useFormStatus();

  const handleSubmit = async (data: FormData) => {
    const firstName = data.get('firstName') as string;
    const lastName = data.get('lastName') as string;
    const email = data.get('email') as string;
    const password = data.get('password') as string;

    try {
      const response = await dispatch(signUp({ firstName, lastName, email, password })).unwrap();

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
          <div className={s.content}>
            <div className={s.contentHeader}>
              <Title className={s.title} size="md">
                Sign up
              </Title>
              <Text className={s.subtitle} size="md">
                Start your productivity path today!
              </Text>
            </div>
            <form className={s.form} action={handleSubmit}>
              <Input
                className={s.input}
                name="firstName"
                label="First Name"
                placeholder="Enter your first name"
              />
              <Input
                className={s.input}
                name="lastName"
                label="Last Name"
                placeholder="Enter your last name"
              />
              <Input
                className={s.input}
                name="email"
                label="Email"
                placeholder="Enter your email"
              />
              <Input
                className={s.input}
                name="password"
                label="Password"
                placeholder="Create a password"
                type="password"
              />

              <Button className={s.button} disabled={status.pending}>
                Get Started
              </Button>
            </form>
          </div>
          <footer className={s.footer}>
            <span>&copy; Pebitoro 2024</span>
            <span>
              <Icon name="mail" width={16} height={16} />
              help@pebitoro.xyz
            </span>
          </footer>
        </main>
      </div>
    </div>
  );
};
