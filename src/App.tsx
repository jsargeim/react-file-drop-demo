import React, { Component } from 'react';
import FileDrop from 'react-file-drop'

class App extends Component {
  handleDrop = (files:FileList, event: React.DragEvent<HTMLDivElement>) => {
    console.log('handleDrop!', files, event);
    return files;
  }

  render() {
    const styles = { border: '1px solid black', width: 600, color: 'black', padding: 20 };
    return (
      <div id="react-file-drop-demo" style={styles}>
        <FileDrop onDrop={this.handleDrop}>
          Drop some files here!
        </FileDrop>
      </div>
    );
  }
}

export default App;
