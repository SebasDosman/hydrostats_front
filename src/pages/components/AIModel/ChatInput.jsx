import PropTypes from 'prop-types';


export const ChatInput = ({ newMessage, setNewMessage, handleSendMessage, startRecognition, isPosting, toggleMute, isMuted }) => {
    return (
        <div className='flex items-center my-2 mx-1 chatbot chat-input'>
            <textarea
                id='chat'
                rows='1'
                className='block mx-4 py-2.5 pl-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border focus:ring-gray-400 focus:border-gray-400 focus:outline-none resize-none'
                placeholder='Mensaje...'
                value={ newMessage }
                onChange={ e => setNewMessage(e.target.value) }
                disabled={ isPosting }
            ></textarea>
            <div className='flex items-center justify-center gap-1 pr-2.5'>
                <button
                    type='submit'
                    className='flex justify-center items-center h-9 aspect-square bg-primary-500 p-2 text-white rounded-full hover:bg-primary-700 cursor-pointer bg-main-blue-700'
                    onClick={ handleSendMessage }
                    disabled={ isPosting }
                >
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                        <path fill='currentColor' d='M4.4 19.425q-.5.2-.95-.088T3 18.5V14l8-2l-8-2V5.5q0-.55.45-.837t.95-.088l15.4 6.5q.625.275.625.925t-.625.925z' />
                    </svg>
                </button>
                <button
                    type='button'
                    className='flex justify-center items-center h-9 aspect-square bg-primary-500 p-2 text-white rounded-full hover:bg-primary-700 cursor-pointer bg-main-blue-700'
                    onClick={ startRecognition }
                    disabled={ isPosting }
                >
                    <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='-5 0 32 32' version='1.1'>
                        <g id='Icon-Set' transform='translate(-105.000000, -307.000000)' fill='#000000'>
                            <path fill='currentColor' d='M111,314 C111,311.238 113.239,309 116,309 C118.761,309 121,311.238 121,314 L121,324 C121,326.762 118.761,329 116,329 C113.239,329 111,326.762 111,324 L111,314 L111,314 Z M116,331 C119.866,331 123,327.866 123,324 L123,314 C123,310.134 119.866,307 116,307 C112.134,307 109,310.134 109,314 L109,324 C109,327.866 112.134,331 116,331 L116,331 Z M127,326 L125,326 C124.089,330.007 120.282,333 116,333 C111.718,333 107.911,330.007 107,326 L105,326 C105.883,330.799 110.063,334.51 115,334.955 L115,337 L114,337 C113.448,337 113,337.448 113,338 C113,338.553 113.448,339 114,339 L118,339 C118.552,339 119,338.553 119,338 C119,337.448 118.552,337 118,337 L117,337 L117,334.955 C121.937,334.51 126.117,330.799 127,326 L127,326 Z' id='microphone' />
                        </g>
                    </svg>
                </button>
                <button
                    className={ `flex justify-center items-center h-9 aspect-square bg-primary-500 p-2 text-white rounded-full hover:bg-primary-700 cursor-pointer bg-main-blue-700 ${ isMuted ? 'bg-red-500' : 'bg-green-500' }` }
                    onClick={ () => { toggleMute(); } }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 383.48 384">
                        <path fill='currentColor' d="M207.75,192.43c0,46.74.01,93.48-.03,140.22,0,2.72-.05,5.58-.82,8.15-3.27,10.93-16.56,14.81-25.44,7.55-1.16-.94-2.18-2.05-3.24-3.11-23.47-23.5-46.94-46.99-70.35-70.56-1.81-1.82-3.6-2.61-6.19-2.58-11.97.14-23.95.08-35.93.06-19.99-.04-33.7-13.47-33.79-33.52-.15-31.12-.16-62.24,0-93.35.11-20.04,13.83-33.39,33.88-33.42,11.6-.02,23.2-.1,34.8.06,3.21.04,5.51-.82,7.83-3.16,23.55-23.77,47.24-47.4,70.85-71.12,5.16-5.18,11.11-7.12,18.03-4.57,6,2.21,9.44,6.72,10.16,13.16.21,1.86.23,3.74.23,5.61.01,46.86,0,93.73,0,140.59ZM64.19,240.03c15.43,0,30.52.15,45.6-.07,6.06-.09,10.78,1.95,14.99,6.21,15.71,15.9,31.55,31.67,47.35,47.49.93.93,1.91,1.82,3.2,3.04V87.83l-.91-.57c-.82,1.09-1.53,2.3-2.49,3.26-15.42,15.49-30.96,30.86-46.25,46.47-4.77,4.87-9.97,7.28-16.89,7.1-13.47-.35-26.95-.1-40.42-.1h-4.19v96.04Z"/>
                        <path fill='currentColor' d="M351.64,186.27c-.78,49.68-16.03,87.18-46.54,118.36-4.71,4.81-10.34,6.41-16.74,4.36-6.28-2.01-9.89-6.59-10.93-13.03-.93-5.76,1.43-10.44,5.42-14.48,11.17-11.3,19.87-24.29,26.24-38.86,20.09-45.93,10.49-101.21-23.92-137.64-1.29-1.36-2.61-2.69-3.83-4.11-5.81-6.79-5.39-16.28.95-22.28,6.31-5.97,15.99-5.96,22.26.3,21.63,21.59,36.28,47.21,42.73,77.14,2.56,11.89,3.51,24.14,4.36,30.25Z"/>
                        <path fill='currentColor' d="M287.72,189.67c-.57,28.19-9.48,50.58-27.41,69.26-6.89,7.18-16.63,7.59-23.34,1.12-6.59-6.36-6.46-16.2.33-23.41,24.36-25.87,24.4-63.4,0-89.21-4.61-4.88-6.4-10.36-4.38-16.79,1.98-6.31,6.53-9.93,12.96-10.99,5.29-.87,9.88.89,13.62,4.64,13.99,13.99,22.76,30.81,26.43,50.22,1.08,5.74,1.39,11.62,1.8,15.16Z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};


ChatInput.propTypes = {
    newMessage: PropTypes.string.isRequired,
    setNewMessage: PropTypes.func.isRequired,
    handleSendMessage: PropTypes.func.isRequired,
    startRecognition: PropTypes.func.isRequired,
    isPosting: PropTypes.bool.isRequired,
    toggleMute: PropTypes.func.isRequired,
    isMuted: PropTypes.bool.isRequired
};