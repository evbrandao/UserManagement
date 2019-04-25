(function () {

    angular
        .module('userManagement', [])
        .service('apiCaller', ['$http', function ($http) {

            var path = '/api/user/';

            this.getUser = function (id) {

                return $http
                    .get(path + id)
                    .then(function (response) {
                        return response.data;
                    })
                    .catch(function (error) { throw error; })
            };

            this.getUsers = function (id) {

                return $http
                    .get(path)
                    .then(function (response) {
                        return response.data;
                    })
                    .catch(function (error) { throw error; })
            };

            this.createUser = function (user) {
                return $http
                    .post(path, user)
                    .then(function (response) {
                        return response;
                    })
                    .catch(function (error) {
                        throw error;
                    });
            };

            this.updateUser = function (id, user) {
                return $http
                    .put(path + id, user)
                    .then(function (response) {
                        return response;
                    })
                    .catch(function (error) {
                        throw error;
                    });
            };

            this.deleteUser = function (id) {
                return $http
                    .delete(path + id)
                    .then(function (response) {
                        return response;
                    })
                    .catch(function (error) {
                        throw error;
                    });
            };
        }])
        .controller('mainController', ['apiCaller', '$scope', '$window', '$log', function (apiCaller, $scope, $window, $log) {

            $scope.users = [];

            this.$onInit = function () {
                apiCaller
                    .getUsers()
                    .then(function (response) {
                        $scope.users = response;
                    })
                    .catch(function (error) {
                        logError('Error loading users:', error);
                    });
            };

            $scope.save = function (user) {

                if (validateUser(user)) {
                    if (user.id) {
                        apiCaller.updateUser(user.id, user).then(function () {
                            user.editing = false;
                        }).catch(function (error) {
                            logError('Error updating user:', error);
                        });
                    }
                    else {
                        apiCaller.createUser(user).then(function (response) {
                            user.id = response.data.id;
                            user.editing = false;
                        }).catch(function (error) {
                            logError('Error creating user:', error);
                        });
                    }
                }
            };

            $scope.addNewUser = function () {
                $scope.users.push({
                    name: '',
                    age: undefined,
                    address: '',
                    editing: true
                });
            };

            $scope.removeUser = function (user, index) {
                if (user.id) {
                    if ($window.confirm('Are you sure?')) {
                        apiCaller.deleteUser(user.id).then(function () {
                            removeUserFromCollection(index);
                        }).catch(function (error) {
                            logError('Error removing user:', error);
                        });
                    }
                }
                else {
                    removeUserFromCollection(index);
                }
            };

            function validateUser(user) {
                if (!user.name) {
                    $window.alert('Name is required.');
                    return false;
                }

                if (isNaN(parseInt(user.age))) {
                    $window.alert('Age is required.');
                    return false;
                }

                if (!user.address) {
                    $window.alert('Address is required.');
                    return false;
                }

                return true;
            }

            function logError(title, error) {
                $log.error(title);
                $log.error(error);
            }

            function removeUserFromCollection(index) {
                $scope.users.splice(index, 1);
            }

        }]);

})();