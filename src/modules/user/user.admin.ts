import { AdminEntity, PasswordWidget } from 'nestjs-admin';
import { UserEntity } from './user.entity';

export class UserAdmin extends AdminEntity {
    entity = UserEntity;
    listDisplay = ['id', 'firstName', 'lastName', 'email'];
    searchFields = ['firstName', 'lastName', 'email'];

    widgets = {
        password: PasswordWidget,
    };
}
