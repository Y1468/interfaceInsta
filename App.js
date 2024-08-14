import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View ,Image, FlatList} from 'react-native';
import { Lista } from './components/lista';

export default class App extends Component{

  constructor(props){
    super(props)

    this.state={
        feed:[
          {
            id:1, 
            nome:'Bruna', 
            descrição:'mais um dia de mais bugs',
            imgPerfil:'https://noticiastu.com/wp-content/uploads/2020/08/Poses-de-Fotos-de-Perfil-1.jpg',
            imgPublicação:'https://cdn.atenaeditora.com.br/documentos/blog_imagem/57/conversions/post-4-optimized.webp',
            lakeada:false,
            likes:5
          },
          {
            id:2,
            nome:'Marcos',
            descrição:'Minha postagem',
            imgPerfil:'https://i.pinimg.com/originals/c1/c5/7f/c1c57f7a5014d41d9de890f8640f64d0.jpg',
            imgPublicação:'https://optclean.com.br/wp-content/uploads/2017/11/dia-da-consciencia-negra-racismo-20.jpg',
            lakeada:false,
            likes:0
          },
          {
            id:3,
            nome:'Bruno',
            descrição:'Dia lindo',
            imgPerfil:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d4ad40103067131.5f450dd53ccd1.png',
            imgPublicação:'https://cdn-media-2.freecodecamp.org/w1280/5f9c9cf2740569d1a4ca3510.jpg',
            lakeada:false,
            likes:32
          }

        ]
    }
  }

   render(){
      return(
        <View style={st.container}>
           <View style={st.header}>
             <Image 
              source={require('./image/logo.png')}
              style={st.logo}
             />
             <Image 
              source={require('./image/send.png')}
              style={st.send}
              />
           </View>
           
           <FlatList
              showsHorizontalScrollIndicator={false}
              data={this.state.feed}
              renderItem={({item})=> <Lista data={item}/>}
           />
        </View>
      )
   }
}
const st = StyleSheet.create({
  container: {
    flex: 1,
  },

  header:{
    height:55,
    backgroundColor:'#FFF',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:5,
    borderBottomWidth:0.2,
    shadowColor:'#000',
    elevation:1,
    paddingTop:30
  },

  logo:{
    
  },

  send:{
    height:23,
    width:23
  }
});
