import { Admin, BooleanInput, Create, Datagrid, List, NumberInput, Resource, RichTextField, Show, SimpleForm, SimpleShowLayout, TextField, TextInput } from 'react-admin';
import { dataProvider } from './assets/data-prodiver';


// const dataProvider1: DataProvider = {
//   getList: (resource: string) => {
//     if (resource == 'students') {
//       const result = {
//         data: [{
//           id: 1, name: 'vaninah'
//         },
//         {
//           id: 2,
//           name: 'Jey'
//         },
//         {
//           id: 3,
//           name: 'Joy'
//         }
//         ],
//         total: 27,
//         meta: {
//           facets: [
//             { name: 'published', const: 12 },
//             { name: 'draft', const: 15 },
//           ]
//         }

//       }
//       return Promise.resolve(result);
//     }

//   }

// }

export const studentList = () =>{
  return (
    <List>
      <Datagrid>
        <TextField source='id'></TextField>
        <TextField source='name'></TextField>
      </Datagrid>
    </List>
  )
}

export const postList = () =>{
  return (
    <List>
      <Datagrid>
        <TextField source='id'></TextField>
        <TextField source='name'></TextField>
        <TextField source='title'></TextField>
      </Datagrid>
    </List>
  )
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

const PostCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source='title' />
      <TextInput source='body' multiline={true} label='Short body' />
      <BooleanInput source='bool' label='Short body' />
      <NumberInput source='bool' label='Short body' />
    </SimpleForm>
  </Create>
);

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name='students' list={studentList} />
      <Resource name='posts' list={postList} show={PostShow} create={PostCreate} />
    </Admin>
  )
};

export default App;
