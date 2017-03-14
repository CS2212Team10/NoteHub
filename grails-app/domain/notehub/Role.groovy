package notehub

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString

/**
 * Class that represents a role in NoteHub
 * @author Cameron Nicolle
 */
@EqualsAndHashCode(includes='authority')
@ToString(includes='authority', includeNames=true, includePackage=false)
class Role implements Serializable {

	private static final long serialVersionUID = 1

	String authority

    /**
     * Constructor for role
     * @param authority Authority for new role
     */
	Role(String authority) {
		this()
		this.authority = authority
	}

	static constraints = {
		authority blank: false, unique: true
	}

	static mapping = {
		cache true
	}
}
