import React from "react";
import NewTicketForm from "./NewTicketForm";
import PropTypes from "prop-types";

class NewTicketControl extends React.Component {
  constructor(props){
    super(props);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.state = { formVisibleOnPage: false};
    // this.handleDisplayingNewTicketForm = this.handleDisplayingNewTicketForm.bind(this);
  }

  handleDisplayingNewTicketForm(event){
    console.log("New ticket button was clicked!");
    this.setState({formVisibleOnPage: true});
  }

  showForm() {
    this.setState({formVisibleOnPage: true});
  }

  hideForm() {
    this.setState({formVisibleOnPage: false});
  }

  render(){
    const formIsVisibleOnPage = this.state.formIsVisibleOnPage;
    let formAreaContent = null;
    if (this.state.formVisibleOnPage){
      formAreaContent = <NewTicketForm
                          onNewTicketCreation={this.props.onNewTicketCreation}
                          hideFormAfterSubmission = {this.hideForm}/>
      // formAreaContent = <NewTicketForm onNewTicketCreation={this.props.onNewTicketCreation}/>
    } else {
      formAreaContent = <button onClick={this.showForm}>Request Help!</button>;
      // formAreaContent = <button onClick={this.handleDisplayingNewTicketForm.bind(this)}>Request Help</button>;
    }

    return (
      <div>
        {formAreaContent}
      </div>
   );
 }
}

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
}

export default NewTicketControl;
