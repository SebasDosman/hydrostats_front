import PropTypes from 'prop-types';

import { IncomingMessage, OutgoingMessage } from './';


export const MessageList = ({ messages }) => {
    return (
        <div className='flex flex-col gap-4 p-2 select-none h-full overflow-auto'>
            {
                messages.map(
                    message =>message.type === 'incoming'
                        ? <IncomingMessage key={message.id } text={ message.text } isLoading={ message.isLoading } />
                        : <OutgoingMessage key={message.id } text={ message.text } />
                )
            }
        </div>
    );
};


MessageList.propTypes = {
    messages: PropTypes.array.isRequired
};
