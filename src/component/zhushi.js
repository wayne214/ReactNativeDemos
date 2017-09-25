import React, {Component, PropTypes} from 'react';
import {
	View,
	StyleSheet
} from 'react-native';

/**
 *                                     _
 *                                    (  )
 *     _ .                         ( `  ) . )
 *   (  _ )_                      (_, _(  ,_)_)
 * (_  _(_ ,)
 *                                                       |
 *         _  _                                        \ _ /
 *        ( `   )_                                   -= (_) =-
 *       (    )    `)                                  /   \
 *     (_   (_ .  _) _)                                  |
 *
 *                                _
 *                              -=\`\
 *                          |\ ____\_\__
 *                        -=\c`""""""" "`)
 *                           `~~~~~/ /~~`
 *                             -==/ /
 *                               '-'                 _
 *                                                  (  )
 *                _, _ .                         ( `  ) . )
 *               ( (  _ )_                      (_, _(  ,_)_)
 *      wayne  (_(_  _(_ ,)
 */


const styles = StyleSheet.create({
    container:{
        flex: 1
    },
});

class zhushi extends Component{
	constructor(props) {
		super(props);
	}

	static propTypes = {
	  style: PropTypes.object,
	};
	componentDidMount(){

	}

	render() {
		return (
			<View style={styles.container}></View>
		)
	}
}

export default zhushi;
