// Project: https://github.com/Kagami/ffmpeg.js
// Definitions by: Vladimir Grenaderov <https://github.com/VladimirGrenaderov>,
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ffmpeg {
    interface Options {
        arguments: string[];
        MEMFS?: Video[] | undefined;
        print?(data: any): void;
        printErr?(data: any): void;
        onExit?(code: unknown): void;
        stdin?(data: any): void;
        mounts?: Mount[] | undefined;
        TOTAL_MEMORY?: number | undefined;
    }

    interface Opts {
        root: string;
    }

    interface Mount {
        type: string;
        opts: Opts;
        mountpoint: string;
    }

    interface Result {
        MEMFS: Video[];
    }

    interface Video {
        data: Uint8Array;
        name: string;
    }
}

declare function ffmpeg(opts: ffmpeg.Options): ffmpeg.Result;

export = ffmpeg;
