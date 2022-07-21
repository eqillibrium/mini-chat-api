export const ALREADY_EXISTS_ERROR = (email: string): string =>
  `Пользователь с email: ${email} уже зарегистрирован!`;
export const USER_NOT_FOUND_ERROR = (email: string): string =>
  `Пользователь с email: ${email} не найден!`;
export const WRONG_PASSWORD_ERROR = (): string => `Указан неверный пароль.`;
