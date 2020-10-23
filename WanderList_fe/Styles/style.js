import {StyleSheet, Dimensions} from "react-native"


const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

    // location screen - Header

      header:{
        padding: 10,
        flexDirection:'row',
    },
      
      Headertext: {
        
        textAlign: "center",
        flex:0.85,
        fontSize: 18,
        fontWeight: "700",
        paddingLeft:10,
        paddingTop:2
      },


    //listsView class which is basically in charge of the whole location screen
    containerListView: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        flexDirection: 'column',
      },
      bgContainer: {
        alignItems: 'center',
      },
      titlePanel_LocationScreen: {
        margin: 10
      },
      activityTitle_LocationScreen: {
          fontSize: 30,
          fontWeight: "700",
          marginBottom: 5
      },
      headerImage: {
        width: width,
        height: 230,
        marginTop: 10,
    
      },
      textInputListView: {
        backgroundColor: 'white',
        borderStyle: 'solid',
        fontSize:15,
        borderRadius: 5,
        paddingLeft: 20,
        marginBottom : 10
      },
      buttonListView: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
      },
      textFieldListView: {
        marginBottom: 20,
        fontSize: 20,
      },


    // ListItem (Location Screen)    contents of the list in location screen
    listItemLocation: {
        backgroundColor: '#fff',
        padding: 14,
        paddingLeft: 20,
        height: 75,
        marginBottom: 10,
        borderRadius: 3,
      },
      titleText: {
        fontSize: 16,
      },
      subTitleText: {
        color: '#494949',
      },
      menuIcon: {
        width: 20,
        height: 20,
      },
      menuIconButton: {
        marginLeft: 'auto',
      },



      //ActivityScreenAdd from the location screen
      container: {
        flex: 1,
      },
      addListButton: {
        alignItems: 'center',
        backgroundColor: '#196DFF',
        padding: 10,
        borderRadius: 4,
        marginBottom: 10,
        padding: 12,
        width: 100,
        marginLeft: 'auto',
        marginRight: 20
      },
      gotoWebsiteButton: {
          alignItems: 'center',
          padding: 10,
          marginBottom: 10,
          padding: 12,
          width: 120,
          marginLeft: 20,
          backgroundColor: '#fff',
          borderColor: '#000',
          borderWidth: 1,
          borderRadius: 3,
      },
      // textField: {
      //     fontSize: 20,
      // },
      titlePanel: {
          marginBottom: 30,
          marginTop: 15,
          marginLeft: 20,
          marginRight: 20
      },
      activityTitle: {
          fontSize: 40,
          fontWeight: "700",
          marginBottom: 5
      },
      mainImage: {
          width: width,
          height: width * (880/1550)
      },
      subtitle: {
          flexDirection: 'row',
      },
      descriptionPane: {
          padding: 20
      },
      buttonPane:{
          marginTop: 'auto',
          marginBottom: 10,
          flexDirection: 'row'
      },
    











      //Profile Page
      containerProfile: {
        flex: 1,
      },
      nameBlock: {
        marginTop: 30,
        alignItems: 'center',
        marginBottom: 30
      },
      listTitleProfile: {
        fontSize: 18,
        margin: 10,
        fontWeight: "700"
      },
      rankBlock:{
          marginBottom: 30,
          alignItems: 'center'
      },
      profileImage: {
          width: 120,
          height: 120,
          borderRadius: 120/ 2,
          marginBottom: 15,
      },
      buttonProfile: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
      },
      nameText: {
          fontSize: 30,
      },
      nameSubText: {
          fontSize: 15
      },
      header:{
        padding: 10,
        flexDirection:'row',
        alignItems: 'center'
    },


      //profile ListItem

    textFieldProfile: {
        color: '#fff'
    },
    listItemProfile: {
        paddingLeft: 20,
        paddingRight: 12,
        padding: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    redeemButton: {
        backgroundColor: '#196DFF',
        marginLeft: 'auto',
        padding: 5,
        color: '#fff',
        borderRadius: 3,
        width: 80,
        alignItems: 'center'
    },
    copyButton: {
        backgroundColor: '#fff',
        marginLeft: 'auto',
        padding: 5,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 3,
        width: 80,
        alignItems: 'center'
    },
    copyTextField: {
        color: '#000'
    },
    codeField: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 3,
        padding: 10,
        alignItems: 'center',
        fontSize: 16,
        marginLeft: 'auto'
    },
    listTextProfile: {
        paddingBottom: 12,
        paddingTop: 12,
    },

    // HomeScreen style
    containerHome: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff'
      },
      topContainer: {
        flex: 1,
        backgroundColor: '#999999'
      },
      bodyContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'stretch',
      },
      bottomContainer: {
        flex: 1,
        backgroundColor: '#555555'
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginBottom: 10
    },
      titleHome: {
          marginBottom: 5,
          fontSize: 30,
          textAlign: 'left',
          fontWeight: '700'
      },
      subtitleHome: {
            marginBottom: 20,
            fontSize: 20,
            textAlign: 'left',
            color: '#000'
        },
      topContainerBackgroundImage: {
        width: width,
        height: 200,
        padding: 15
      },
      image1: {
        resizeMode: "cover",
        flex: 1,
        padding: 15
      },
      textInputHome: {
        backgroundColor: 'white',
        borderStyle: 'solid',
        fontSize:15,
        borderRadius: 5,
        paddingLeft: 20
      },
      populars:{
        flex: 0.5,
        width: 1,
        height: 200,
        margin: 5,
        backgroundColor: 'white'
        },
      cardItemContainer: {
        width: width - 40,
        height: width - 20,
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "white",
        marginBottom: 30,
        alignSelf: "center"
      },
      cardItemImage: {
        width: width - 40,
        height: width - 80,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 10
      },
      cardItemLabel: {
        fontSize: 20,
        fontWeight: "700"
      },


    //might not be neccessary
    CategoryContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },



    //login page style

    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'column'
      },
      logintitlePane: {
        alignItems: 'center',
      },
      logintextField: {
          marginBottom: 40,
          fontSize: 20,
      },
      logintextInput: {
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 4,
          marginBottom: 10,
          padding: 10,
      },
      loginbutton: {
        alignItems: 'center',
        backgroundColor: '#196DFF',
        padding: 10,
        borderRadius: 4,
        marginBottom: 10,
        padding: 12,
      },
      disabledButton: {
        alignItems: 'center',
        backgroundColor: '#196DFF',
        padding: 10,
        borderRadius: 4,
        marginBottom: 10,
        padding: 12,
      },
      loginLogo: {
        width: 154,
        height: 45,
      },
      loginLeafLogo: {
        width: 48,
        height: 48,
        marginBottom: 10
      },
      signupTextCont: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        justifyContent:'center',
        marginVertical: 16,
        flexDirection: 'row'
      },
      signupText:{
        color:'rgba(0,0,0,0.6)',
      },

      signupButton:{
        fontWeight:'500',
      },



      //Sign Up page

      containerSignUp: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'column'
      },
      titlePane: {
        alignItems: 'center',
      },
      textField: {
          marginBottom: 40,
          fontSize: 20,
      },
      textInput: {
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 4,
          marginBottom: 10,
          padding: 10,
      },
      buttonSignUp: {
        alignItems: 'center',
        backgroundColor: '#196DFF',
        padding: 10,
        borderRadius: 4,
        marginBottom: 10,
        padding: 12,
      },
      disabledButton: {
        alignItems: 'center',
        backgroundColor: '#84C1FF',
        padding: 10,
        borderRadius: 4,
        marginBottom: 10,
        padding: 12,
      },
      loginLogo: {
        width: 154,
        height: 45,
      },
      signupTextCont: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        justifyContent:'center',
        marginVertical: 16,
        flexDirection: 'row'
      },
      signupText:{
        color:'rgba(0,0,0,0.6)',
      },
      signupButton:{
      fontWeight:'500',
      },


    //QR Code

    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
      fontWeight: '500',
      color: '#000'
    },
    buttonText: {
      fontSize: 21,
      marginTop: 30
    },
      buttonTouchable: {
        padding: 16,
        alignItems: 'center'
      },
      goBackButton_QR: {
          alignItems: 'center',
          padding: 12,
          width: 120,
          backgroundColor: '#fff',
          borderColor: '#000',
          borderWidth: 1,
          borderRadius: 3,
          marginTop: 'auto',
          marginBottom: 10,
          marginLeft: 10,
      },
        bottomContainer_QR: {
            flexDirection: 'column',
            alignItems: 'flex-start'
        },
        activityCompleteModalContainer: {
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        activityCompleteModal_1: {
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 3,
          padding: 10,
          height: 150,
          width: 250
        },
        activityCompleteModal: {
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 3,
          padding: 10,
          height: 300,
          width: 350
        },
        activityCompleteModalButton_1: {
          alignItems: 'center',
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 3,
          padding: 10,
          marginTop: 'auto',
          width: 228
        },
        activityCompleteModalButton_2: {

        },
        ratingGrid: {
          flexDirection: 'row',
          marginBottom: 10
        },
        ratingsArea: {
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 20
        }, 
        ratingImage_notSelected: {
          width: 40,
          height: 40,
          opacity: 0.5
        },
        ratingImage_selected: {
          width: 40,
          height: 40,
          opacity: 1.0
        },
        ratingButton: {
          marginLeft: 2,
          marginRight: 2,
          backgroundColor: '#fff'
        },

        // ActivityScreen leading to activity screen from lists page to complete task


        // container: {
        //     flex: 1,
        //   },
          // addListButton: {
          //   alignItems: 'center',
          //   backgroundColor: '#196DFF',
          //   padding: 10,
          //   borderRadius: 4,
          //   marginBottom: 10,
          //   padding: 12,
          //   width: 100,
          //   marginLeft: 'auto',
          //   marginRight: 20
          // },
          // gotoWebsiteButton: {
          //     alignItems: 'center',
          //     padding: 10,
          //     marginBottom: 10,
          //     padding: 12,
          //     width: 120,
          //     marginLeft: 20,
          //     backgroundColor: '#fff',
          //     borderColor: '#000',
          //     borderWidth: 1,
          //     borderRadius: 3,
          // },
          textField: {
              fontSize: 20,
          },
          titlePanel: {
              marginBottom: 30,
              marginTop: 15,
              marginLeft: 20,
              marginRight: 20
          },
          activityTitle: {
              fontSize: 40,
              fontWeight: "700",
              marginBottom: 5
          },
          mainImage: {
              width: width,
              height: width * (880/1550)
          },
          subtitle: {
              flexDirection: 'row',
          },
          descriptionPane: {
              padding: 20
          },
          buttonPane:{
              marginTop: 'auto',
              marginBottom: 10,
              flexDirection: 'row'
          },




        //Pop up when press add to list button on specific location screen addToList.js


        // container: {
        //     flex: 1,
        //   },
          // addListButton: {
          //   alignItems: 'center',
          //   backgroundColor: '#196DFF',
          //   padding: 10,
          //   borderRadius: 4,
          //   marginBottom: 10,
          //   padding: 12,
          //   width: 100,
          //   marginLeft: 'auto',
          //   marginRight: 20
          // },
          button: {
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
            marginTop: 'auto',
          },
          addButton: {
            alignItems: 'center',
            backgroundColor: '#196DFF',
            borderRadius: 3,
            padding: 10,
            marginTop: 'auto',
            marginLeft: 'auto',
            width: 80
          },
          cancelButton: {
            alignItems: 'center',
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 3,
            padding: 10,
            marginTop: 'auto',
            width: 80
          },
          textField: {
              marginBottom: 20,
              fontSize: 20,
          },
        //   map: {
        //       width: 390,
        //       height: 300,
        //       marginBottom: 20,
        //   },
          listTitle: {
              padding: 10,
              fontSize: 18,
              fontWeight: "700",
          },
          list: {
              marginBottom: 10,
              backgroundColor: '#ccc',
              padding: 10,
              paddingBottom: 0
          },
          addListModalContainer: {
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
          },
          addListModal: {
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 3,
              padding: 10,
              height: 150,
              width: 200
          },
          modalTextField: {
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 4,
              marginBottom: 10,
              padding: 10,
              marginTop: 10
          },



          //wanderlist    listView the actual your list page 

          // container: {
          //   flex: 1,
          // },
          // addListButton: {
          //   alignItems: 'center',
          //   backgroundColor: '#196DFF',
          //   padding: 10,
          //   borderRadius: 4,
          //   marginBottom: 10,
          //   padding: 12,
          //   width: 100,
          //   marginLeft: 'auto',
          //   marginRight: 20
          // },
          button: {
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
            marginTop: 'auto',
          },
          addButton: {
            alignItems: 'center',
            backgroundColor: '#196DFF',
            borderRadius: 3,
            padding: 10,
            marginTop: 'auto',
            marginLeft: 'auto',
            width: 80
          },
          cancelButton: {
            alignItems: 'center',
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 3,
            padding: 10,
            marginTop: 'auto',
            width: 80
          },
          textField: {
              marginBottom: 20,
              fontSize: 20,
          },
          map: {
              width: 390,
              height: 300,
              marginBottom: 20,
          },
          listTitle_WanderLists: {
              fontSize: 18,
              fontWeight: "700",
              paddingLeft:10,
              paddingTop:2
          },
          // header:{
          //   // backgroundColor: "darkslateblue",
          //     padding: 10,
          //     flexDirection:'row',
          //     flexWrap:'wrap'
          // },
          list: {
              marginBottom: 10,
              backgroundColor: '#ccc',
              padding: 10,
              paddingBottom: 0
          },
          addListModalContainer: {
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
          },
          addListModal: {
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 3,
              padding: 10,
              height: 150,
              width: 200
          },
          modalTextField: {
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 4,
              marginBottom: 10,
              padding: 10,
              marginTop: 10
          },
          
          
          
          
        //   AddListModal pop up when pressing New List Button
          addButton: {
            alignItems: 'center',
            backgroundColor: '#196DFF',
            borderRadius: 3,
            padding: 10,
            marginTop: 'auto',
            marginLeft: 'auto',
            width: 80
          },
          cancelButton: {
            alignItems: 'center',
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 3,
            padding: 10,
            marginTop: 'auto',
            width: 80
          },
          addListModalContainerWanderlist: {
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)'
          },
          addListModalWanderlist: {
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 3,
              padding: 10,
              height: 150,
              width: 200
          },
          // modalTextField: {
          //     borderColor: 'gray',
          //     borderWidth: 1,
          //     borderRadius: 4,
          //     marginBottom: 10,
          //     padding: 10,
          //     marginTop: 10
          // },


          //Wanderlist listItem.js the list in the your list page
          listItemWanderlist: {
            backgroundColor: '#fff',
            padding: 14,
            paddingLeft: 20,
            height: 75,
            marginBottom: 10,
            borderRadius: 3,
        },
        // titleText: {
        //     fontSize: 16
        // },
        // subTitleText: {
        //     color: '#494949'
        // },
        menuIcon: {
            width: 20,
            height: 20
        },
        menuIconButton: {
            marginLeft: 'auto',
    
        },



        // ActivityListItem display the list in the page with the map 
        textFieldActivity: {
            fontSize: 15,
            margin: 5,
            marginRight: 10,
            width: 160,
        },
        listCompleteActivityButton: {
            backgroundColor: '#fff',
            padding: 5,
            borderColor: '#000',
            borderWidth: 1,
            borderRadius: 3,
            width: 80,
            alignItems: 'center'
        },
        listItemActivity: {
            backgroundColor: '#fff',
            paddingRight: 12,
            padding: 6,
            paddingLeft: 20,
            flexDirection: 'row',
            alignItems: 'center'
        },
        



        //MapComponent display the map itself
        mapContainer: {
            alignItems: 'center',
          },
          mapScrollview: {
            alignItems: 'center',
            paddingVertical: 40,
          },
          mapActivity: {
            width: width,
            height: 300,
          },



          //SpecificListView list passed when the one of the list is pressed

          // container: {
          //   flex: 1,
          // },
          button: {
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
            marginTop: 'auto',
          },
          textField: {
              marginBottom: 20,
              fontSize: 20,
          },
          // map: {
          //     width: 390,
          //     height: 300,
          //     marginBottom: 20,
          // },
          listItem: {
        
          },
          listTitle: {
              padding: 10,
              fontSize: 18,
              fontWeight: "700"
          },
          completeStatusText: {
              fontSize: 16,
              marginTop: 10,
              padding: 10,
              fontStyle: "italic"
          },
          topPanel: {
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 10
          },
          tagsDropdownButton: {
              padding: 5,
              width: 150,
              marginLeft: 'auto',
              marginRight: 10,
              flexDirection: 'row',
              alignItems: 'center'
          },



        //   ActivityPage from wanderlist page

          // container: {
          //     flex: 1,
          //   },
          
          // addListButton: {
          //   alignItems: 'center',
          //   backgroundColor: '#196DFF',
          //   padding: 10,
          //   borderRadius: 4,
          //   marginBottom: 10,
          //   padding: 12,
          //   width: 100,
          //   marginLeft: 'auto',
          //   marginRight: 20
          // },
          addToWL: {
              alignItems: 'center',
              padding: 10,
              marginBottom: 10,
              padding: 12,
              width: 150,
              marginLeft: 20,
              backgroundColor: '#fff',
              borderColor: '#000',
              borderWidth: 1,
              borderRadius: 3,
          },
          textField: {
              fontSize: 20,
          },
          titlePanel: {
              marginBottom: 30,
              marginTop: 15,
              marginLeft: 20,
              marginRight: 20
          },
          activityTitle: {
              fontSize: 40,
              fontWeight: "700",
              marginBottom: 5
          },
          mainImage: {
              width: width,
              height: width * (880/1550)
          },
          subtitle: {
              flexDirection: 'row',
          },
          descriptionPane: {
              padding: 20
          },
          buttonPane:{
              marginTop: 'auto',
              marginBottom: 10,
              flexDirection: 'row'
          },
          leafIcon: {
            width: 16,
            height: 16
          }
  });

