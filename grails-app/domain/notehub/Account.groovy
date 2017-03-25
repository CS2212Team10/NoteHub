package notehub

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString

/**
 * Class that represents an account in NoteHub
 * @author Cameron Nicolle
 */
@EqualsAndHashCode(includes='username')
@ToString(includes='username', includeNames=true, includePackage=false)
class Account implements Serializable {

	private static final long serialVersionUID = 1

	transient springSecurityService

	String username
	String password
	boolean enabled = true
	boolean accountExpired
	boolean accountLocked
	boolean passwordExpired

    User user

    /**
     * Constructor for Account
     * @param username  Username of Account
     * @param password  Password of account
     */
	Account(String username, String password) {
		this()
		this.username = username
		this.password = password
	}

    /**
     * Getter for role that are a user has
     * @return  Set of roles
     */
	Set<Role> getAuthorities() {
		AccountRole.findAllByAccount(this)*.role
	}

    /**
     * Automatically encode password when a new account is created
     * @return
     */
	def beforeInsert() {
		encodePassword()
	}

    /**
     * Automatically encode password when a account is updated
     * @return
     */
	def beforeUpdate() {
		if (isDirty('password')) {
			encodePassword()
		}
	}

    /**
     * Encodes password
     */
	protected void encodePassword() {
		password = springSecurityService?.passwordEncoder ? springSecurityService.encodePassword(password) : password
	}

	static transients = ['springSecurityService']

	static constraints = {
		username(blank: false, unique: true, email: true)
		password(blank: false)
	}

	static mapping = {
		password column: '`password`'
	}
}
