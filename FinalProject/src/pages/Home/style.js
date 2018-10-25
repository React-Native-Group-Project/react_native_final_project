
const styles = {
  profileButton:{
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: 'cyan',
    borderRadius: 40,
    padding: 3,
    marginVertical: 10,
    marginHorizontal: 15
  },
  sliderContainer: {
    height: 200,
    marginHorizontal: 10,
    marginBottom: 30,
    marginTop: 10,
    borderRadius: 4,
    overflow: 'hidden' 
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'gray',
  },
  textSlider: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 50,
    left: 20
  },
  image: {
    width: '100%',
    flex: 1,
    opacity: .6
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    opacity: .5,
    borderRadius: 20,
  },
  wrapSearchBar:{
    alignItems: 'center', 
    position: 'absolute',
    bottom: '1%',
    width: '100%', 
    paddingVertical: 20, 
    backgroundColor: 'transparent'
  },
  searchBar:{
    borderRadius: 45,
    backgroundColor: '#eaeaea',
    width: 200,
    height: 40,
    paddingHorizontal: 10
  },
  buttonSearch:{
    borderRadius: 4,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    textAlign: 'center',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'black'
  },
  countryLink: {
    flex: 1/2,
    height: 180,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: "black"
  },
  textCountry: {
    position: 'absolute',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
}

export default styles