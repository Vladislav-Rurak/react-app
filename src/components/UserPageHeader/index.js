import classNames from 'classnames';
import CONSTANTS from '../../constants';
import { ThemeContext, UserContext } from '../../contexts';
import styles from './UserPageHeader.module.scss';

function UserPageHeader (props) {
  return (
    <ThemeContext.Consumer>
      {([theme, setTheme]) => (
        <UserContext.Consumer>
          {user => {
            const headerClassNames = classNames(styles.header, {
              [styles.light]: theme === CONSTANTS.THEMES.LIGHT,
              [styles.dark]: theme === CONSTANTS.THEMES.DARK,
            });

            return (
              <>
                <header className={headerClassNames}>
                  <input type='checkbox' onClick={setTheme} />
                  <div className={styles.userInfoContainer}>
                    <img
                      className={styles.img}
                      src={user.src}
                      alt={`${user.firstName} ${user.lastName}`}
                    />
                    <div> {`${user.firstName} ${user.lastName}`}</div>
                  </div>
                </header>
              </>
            );
          }}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}

export default UserPageHeader;
