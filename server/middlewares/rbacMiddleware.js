const roles = require('../config/roles.json').roles

module.exports = {
    checkPermission: function(permission) {
        return (req, res, next) => {
            // the role linked with the user of the request
            const userRole = req.user?.role

            // fetching the permissions given to the user's role
            const userPermissions = roles.find((role) => role.name === userRole).permissions

            if(userPermissions.includes(permission)){
                // user has the required permissions
                next()
            }else{
                // user does not have sufficient permissions
                console.log('rbac not cleared')
                res.sendStatus(403)
            }
        }
    }
}