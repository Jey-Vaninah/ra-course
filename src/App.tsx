import { Admin, BooleanInput, Create, Datagrid, EmailField, List, NumberInput, Resource, RichTextField, Show, SimpleForm, SimpleShowLayout, TextField, TextInput } from 'react-admin';
import { dataProvider } from './assets/data-prodiver';

export const userList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <TextField source='username' />
        <EmailField source='email' />
      </Datagrid>
    </List>
  );
}

export const postList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source='id' />
        <TextField source='title' />
      </Datagrid>
    </List>
  );
}

export const PostShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source='id' />
      <TextField source='title' />
      <RichTextField source='body' />
    </SimpleShowLayout>
  </Show>
);

export const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='username' />
      <TextField source='email' />
    </SimpleShowLayout>
  </Show>
);

const PostCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source='title' />
      <TextInput source='body' multiline={true} label='Short body' />
      <BooleanInput source='bool' label='Boolean' />
      <NumberInput source='numberField' label='Number Field' />
    </SimpleForm>
  </Create>
);

const userCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source='name' />
      <TextInput source='username' />
      <TextInput source='email' />
    </SimpleForm>
  </Create>
);

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name='posts' list={postList} show={PostShow} create={PostCreate} />
      <Resource name='users' list={userList} show={UserShow} create={userCreate} />
    </Admin>
  );
};

export default App;
