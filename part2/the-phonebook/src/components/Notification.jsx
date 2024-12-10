import './Notification.css';

const Notification = ({ notification }) => {
    if (!notification.message) return null;

    const { message, type } = notification;
    const className = `notification ${type}`;

    return (
        <div className={className}>
            <h2>{message}</h2>
        </div>
    );
};

export { Notification };