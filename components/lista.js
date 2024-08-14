
import { Component } from "react";
import { View,Text,StyleSheet,Image, TouchableOpacity} from "react-native";


export class Lista extends Component{

    constructor(props){
       super(props)

       this.state={
          feed:this.props.data
       }

       this.mostrarLikes=this.mostrarLikes.bind(this)
       this.like=this.like.bind(this)
       this.carregarIcone=this.carregarIcone.bind(this)
    }

    carregarIcone(lakeada){
      //Trocando imagem
      return lakeada ? require('../image/likeada.png') : require('../image/like.png')
    }

    like(){
        let feed=this.state.feed
       
        //Verificando se fôi lakeada
        if (feed.lakeada===true) {

            this.setState({
                feed:{
                  ...feed,
                  lakeada:false,
                  likes:feed.likes-1
                }
            })

        }else{
            this.setState({
                feed:{
                    ...feed,
                    lakeada:true,
                    likes:feed.likes+1
                }
            })
        }
    }

    mostrarLikes(Likers){
        let feed=this.state.feed
        
        //Verificando se tem likes
        if (feed.likes<=0) {
            return
        }

        return(
            <Text style={st.txtlikes}>
              {feed.likes}
              {feed.likes > 1 ? ' Curtidas ' : ' Curtida '}
            </Text>
        )
    }
    render(){
        return(
            <View>
                <View style={st.viewPerfiu}>
                    <Image 
                     source={{uri:this.state.feed.imgPerfil}}
                     style={st.img}
                     />

                     <Text style={st.txtNome}>{this.state.feed.nome}</Text>
                </View>

                <Image
                   source={{uri:this.state.feed.imgPublicação}}
                   style={st.imgPublicacao}
                   resizeMode="cover"
                />

                <View style={st.areaBtn}>
                    <TouchableOpacity onPress={()=>this.like()}>
                        <Image 
                         source={this.carregarIcone(this.state.feed.lakeada)}
                         style={st.iconeLike}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={st.btn2}>
                        <Image 
                         source={require('../image/send.png')}
                         style={st.iconeLike}
                         />
                    </TouchableOpacity>
                </View>

                   {this.mostrarLikes(this.state.feed.likes)}

                <View style={st.viewRodape}>
                    <Text style={st.nomeRodape}>
                        {this.state.feed.nome}
                    </Text>
                    <Text style={st.deskRodape}>
                        {this.state.feed.descrição}
                    </Text>
                </View>
            </View>
        )
    }
}

const st=StyleSheet.create({
    
    viewPerfiu:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        padding:8
    },

    img:{
       width:50,
       height:50,
       borderRadius:25
    },

    txtNome:{
       fontSize:22,
       textAlign:'left',
       color:'#000000'
    },

    imgPublicacao:{
       flex:1,
       height:400,
       alignItems:'center'
    },

    areaBtn:{
        flexDirection:'row',
        padding:5
    },

    iconeLike:{
       width:33,
       height:33
    },

    btn2:{
        marginLeft:5
    },

    viewRodape:{
       flexDirection:'row',
       alignItems:'center'
    },

    nomeRodape:{
       fontSize:18,
       fontWeight:'bold',
       color:'#000',
       paddingLeft:5
    },

    deskRodape:{
       fontSize:15,
       color:'#000',
       paddingLeft:5
    },

    txtlikes:{
       fontWeight:'bold',
       marginLeft:5
    }

})
