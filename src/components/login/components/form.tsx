import { Dispatch, SetStateAction } from 'react';
import { Forgot } from '../styles';
import { Icons } from '@assets/index';
import { InputLoginComponent } from './input';
import { ProfileTitle, TextDescription } from '@/shared/style/font';
import { SubmitBtnGradient } from './submitBtn';
import { TypeAuth } from '@/types/components/auth';
import { useRouter } from 'expo-router';

type Props = {
  values: TypeAuth;
  loader?: boolean;
  setValues: Dispatch<SetStateAction<TypeAuth>>;
  errors?: TypeAuth;
  submit?: Function;
};

export const FormLoginComponent = ({
  values,
  setValues,
  errors,
  loader,
  submit,
}: Props) => {
  const router = useRouter();
  return (
    <>
      <ProfileTitle margin={[30, 0, 0, 0]}>Faça login</ProfileTitle>
      <TextDescription color="greyLight">
        seja bem-vindo novamente.
      </TextDescription>
      <InputLoginComponent
        label="Usuário"
        icon={<Icons.User />}
        value={values.username}
        errorLabel={errors?.username}
        onChangeText={(text) => {
          setValues({
            ...values,
            username: text.toLowerCase(),
          });
        }}
      />
      <InputLoginComponent
        icon={<Icons.Key />}
        label="Senha"
        secureTextEntry={true}
        value={values.password}
        errorLabel={errors?.password}
        onChangeText={(text) => {
          setValues({
            ...values,
            password: text,
          });
        }}
      />
      <Forgot
        onPress={() => {
          router.push({
            pathname: "login/forgot",
          });
        }}
      >
        <TextDescription color="greyLight">Forgot Password?</TextDescription>
      </Forgot>
      <SubmitBtnGradient label="entrar" onPress={submit} loader={loader} />
    </>
  );
};
