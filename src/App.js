import {useState} from 'react';
import './App.css';
import '@mantine/core/styles.css';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';
import { Container,SimpleGrid,List,ThemeIcon,rem } from '@mantine/core';
import Card from './components/Card';

const storeItems = [
{
  name:'A',
  price:20,
},
{
  name:'B',
  price:10,
},
{
  name:'C',
  price:25,
},
]

function App() {
 const [basketItems,setBasketItems] = useState([]);

  return (
    <Container>

    <SimpleGrid cols={3}>
      {storeItems.map(({name})=>{
       return  <Card 
       name ={name}
       key = {name}
       onAdd={()=>{
       }}
       /> 
      })}
    </SimpleGrid>
    <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
        </ThemeIcon>
      }
    >
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconCircleDashed style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Submit a pull request once you are done
      </List.Item>
    </List>
    </Container>
  );
}

export default App;
