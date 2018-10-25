const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    top: '5%',
    left: '5%',
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 4,
    fontSize: 20,
    fontWeight: 'bold',
    width: 50,
    height: 50,
    color: 'blue',
    textAlign: 'center',
    lineHeight: 40,
  },
  grid: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 10
  }, 
  w50: {
    flex: 1/2,
    paddingLeft: 5,
    paddingRight: 5
  },
  w100: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'center',
  },
  ImageBg: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
  },
  formWrapper: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 4,
    width: '70%',
  },
  inputText: {
    height: 40, 
    borderColor: '#aaa', 
    borderWidth: 1,
    borderRadius: 4
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    borderRadius: 4,
    backgroundColor: 'blue',
    width: '70%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    textAlign: 'center'
  },
}

export default styles
