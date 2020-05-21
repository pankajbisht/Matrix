class Util {
	constructor() {
		this.version = 0.1;
	}

	rand(min, max) {

		if (arguments.length == 2) {
            
            return Math.round(Math.random() * (max - min + 1) + min);
        } else {
            
            return Math.floor(Math.random() * min  + 1);
        }
	}

	logs(array) {

        for (var i = 0, length = array.length; i < length; i++)
            console.log(array[i]);
    };

    each(array, action) {

        for (var i = 0, len = array.length; i < len; i++)
            action(array[i], i);
    };

    map(array, action) {
        var results = [];

        this.each(array, function (element) {
           results.push(action(element));
        });

        return results;
    };

    reduce(array, action, base) {

        this.each(array, function (element) {
            base = action(base, element);
        });

        return base;
    };

    range(x, y, arr, action) {

        if (action)

            for (var i = x, len = y; i < len; i++)
                action(arr[i]);
    }

    rC(len, action) {

        if(action)

            for (var i = 0; i < len; i++)
                action(i);
    }
}
