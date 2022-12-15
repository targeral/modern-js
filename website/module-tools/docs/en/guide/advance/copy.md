# Use the Copy tool

The Module Project provides the Copy utility for copying already existing individual files or entire directories into the product directory. Next we learn how to use it.

## Understanding the Copy API

We can use the Copy tool via the [`buildConfig.copy`](/en/api/build-config#copy) API, which contains the following two main configurations.

* [`patterns`](/en/api/build-config#copypatterns)
* [`options`](/en/api/build-config#copyoptions)

It is recommended to spend some time getting to know them before you start learning.

## API Description

`copy.patterns` is used to find the copied file and configure the path to the output.

where `patterns.from` is used to specify the file or directory to be copied. It takes either a Glob pattern string or a specific path. Glob pattern string means [fast-glob pattern-syntax](https://github.com/mrmlnc/fast-glob#pattern-syntax). So we can use it in two ways.

``` ts
export default defineConfig({
  buildConfig: {
    copy: {
      patterns: [
        { from: './index.html', to: ''},
        { from: './*.html', to: ''},
      ]
    }
  }
});
```

`patterns.context` is generally used in conjunction with `patterns.from`, which by default has the same value as [`buildConfig.sourceDir`](/zh/api/build-config#sourcedir), so we can specify the `src/data.json` file as the file to be copied as follows.
> By default, `buildConfig.sourceDir` is `src`

``` ts
export default defineConfig({
  buildConfig: {
    copy: {
      patterns: [
        { from: './data.json' to: ''},
      ],
    },
  },
});
```

When the specified file is not in the source directory, you can modify the `context` configuration. For example, specify `temp/index.html` in the project directory as the file to be copied:

```ts
import path from 'path';

export default defineConfig({
  buildConfig: {
    copy: {
      patterns: [
        {
          from: './index.html',
          context: path.join(__dirname, './temp')
          to: '',
        }
      ],
    },
  },
});
```

`patterns.to` is used to specify the output path of the copied file, which by default is the value corresponding to [`buildConfig.outdir`](zh/api/build-config#outdir). So we copy `src/index.html` to the `dist` directory as follows.

``` ts
export default defineConfig({
  buildConfig: {
    copy: {
      patterns: [
        { from: './index.html', }
      ],
    },
  },
});
```

When we have `patterns.to` configured:

* If it is a relative path, the path will be calculated relative to `buildConfig.outdir` to find the absolute path to the copied file output.
* If it is an absolute path, the value will be used directly.

Finally `patterns.globOptions` is used to configure the find replica file [globby](https://github.com/sindresorhus/globby) object, whose configuration can be found at:

* [globby.options](https://github.com/sindresorhus/globby#options)

## Example of using different scenarios

### Copy file to file

``` ts
export default defineConfig({
  buildConfig: [
    {
      outdir: 'dist',
      copy: {
        patterns: [
          /**
           * copy file to file
           */
          {
            from: './temp-1/a.png',
            context: __dirname,
            to: './temp-1/b.png',
          },
        ],
      },
    },
  ]
});
```

### Copy file to directory

``` ts
export default defineConfig({
  buildConfig: [
    {
      outdir: 'dist',
      copy: {
        patterns: [
          /**
           * copy file to dir
           */
          {
            from: './temp-2/a.png',
            context: __dirname,
            to: './temp-2',
          },
        ],
      },
    },
  ],
});
```

### Copy directory to directory

``` ts
export default defineConfig({
  buildConfig: [
    {
      outdir: 'dist',
      copy: {
        patterns: [
          /**
           * copy dir to dir
           */
          {
            from: './temp-3/',
            to: './temp-3',
            context: __dirname,
          },
        ],
        options: {
          enableCopySync: true,
        },
      },
    },
  ],
});
```

### Copy directory to file

``` ts
export default defineConfig({
  buildConfig: [
    {
      outdir: 'dist',
      copy: {
        patterns: [
          /**
           * copy dir to file
           */
          {
            from: './temp-4/',
            context: __dirname,
            to: './temp-4/_index.html',
          },
        ],
        options: {
          enableCopySync: true,
        },
      },
    },
  ],
});
```

### Use Glob

``` ts
export default defineConfig({
  buildConfig: [
    {
      outdir: 'dist',
      copy: {
        patterns: [
          /**
           * copy glob to dir
           */
          {
            from: './*.html',
            to: './temp-5',
          },
        ],
        options: {
          enableCopySync: true,
        },
      },
    },
    {
      copy: {
        patterns: [
          /**
           * copy glob to file
           */
          {
            from: './*.html',
            to: './temp-6/index.html',
          },
        ],
        options: {
          enableCopySync: true,
        },
      },
    },
  ],
});
```
