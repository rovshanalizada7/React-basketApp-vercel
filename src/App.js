import {useState} from 'react';
import { useDisclosure } from '@mantine/hooks';
import '@mantine/core/styles.css';
import './App.css';
import { IconCircleCheck,IconBasket } from '@tabler/icons-react';
import {Badge , Container,Drawer,Indicator ,SimpleGrid,List,Group,ThemeIcon,rem,Input,Button } from '@mantine/core';
import Card from './components/Card';


const storeItems = [
{
  id:100,
  src:"bag",
  name:'Backpack',
  price:20,
},
{
  id:101,
  src:"car",
  name:'Ancient car',
  price:10,
},
{
  id:102,
  src:"headphones",
  name:'Headphone',
  price:25,
},
{
  id:103,
  src:"parfume",
  name:'Parfume',
  price:25,
},
{
  id:104,
  src:"photogr",
  name:'Photo machine',
  price:25,
},
{
  id:105,
  src:"watch",
  name:'Watch',
  price:25,
},
]

function App() {
 const [opened, { open, close }] = useDisclosure(false);
 const [basketItems,setBasketItems] = useState([]);
 let [searchValue,setSearchValue] = useState('');
 let filteredItems = storeItems.filter((item)=>item.name.toLowerCase().indexOf(searchValue.toLowerCase())>=0);

let addToBasket = ({id,name}) => {
 let basketIndex = basketItems.findIndex(item=>item.id === id);
 if(basketIndex >=0) {
  let _basketItems = [...basketItems];
  _basketItems[basketIndex].count += 1;
  setBasketItems(_basketItems);
 }else {
  setBasketItems([...basketItems,{id,name,count: 1}]);
 }
};

  return (

    <Container>
     <h1>Basket App</h1> 
      
   <Group align='end'>

    <Input.Wrapper label="Include an item name " >
      <Input value={searchValue} placeholder='Search...' onChange={(e)=>setSearchValue(e.target.value)} />
    </Input.Wrapper>
    <Button onClick={()=>setSearchValue('')}>Clean</Button>

    <Indicator label={basketItems.length} inline processing color="red" size={18}>
    <Button onClick={open}><IconBasket size={26}/></Button>
    </Indicator>

    </Group>

    <SimpleGrid cols={3} className='Store'>
      {filteredItems.map(({id,name,src})=>{
       return  <Card 
       name ={name}
       src={src}
       key = {name}
       onAdd={()=>addToBasket({id,name})}
       /> 
      })}
    </SimpleGrid>

    <Drawer position="right"
        opened={opened}
        onClose={close}
        title="My Basket"
        padding='md'
        size='md'
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
      <List 
      className="List"
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
        </ThemeIcon>
      }
    >
    {basketItems.map(({name,count},index)=> (
  <List.Item key={index}>
    {name} <Badge color="cyan">{count}</Badge> 
    </List.Item> 
  ))}
      
    </List>
  
   </Drawer>

  </Container>

  
  );
}

export default App;
