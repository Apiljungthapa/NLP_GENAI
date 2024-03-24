import { _ as __vitePreload } from './index-ec890757.js';
import { B as Block } from './Button-cca92c6b.js';
import { B as BlockLabel } from './BlockLabel-c880a272.js';
import { I as IconButton } from './IconButton-246ba9e7.js';
import { a as Download } from './DownloadLink-be3958db.js';
import { S as Static } from './Index-3b1865e7.js';
import { F as File } from './File-e96cd7d6.js';
import { U as Undo } from './Undo-6c110254.js';
import { U as Upload } from './ModifyUpload.svelte_svelte_type_style_lang-7a67d238.js';
import { M as ModifyUpload } from './ModifyUpload-af686f29.js';
import { E as Empty } from './Empty-79b64d64.js';
import { U as UploadText } from './UploadText-7dd08ed3.js';
export { default as BaseExample } from './Example-a0d6492c.js';
import './svelte/svelte.js';
import './file-url-fbb30a3f.js';
import './Clear-9760deed.js';
import './Upload-c5c1b405.js';

var has = Object.prototype.hasOwnProperty;

function find(iter, tar, key) {
	for (key of iter.keys()) {
		if (dequal(key, tar)) return key;
	}
}

function dequal(foo, bar) {
	var ctor, len, tmp;
	if (foo === bar) return true;

	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();

		if (ctor === Array) {
			if ((len=foo.length) === bar.length) {
				while (len-- && dequal(foo[len], bar[len]));
			}
			return len === -1;
		}

		if (ctor === Set) {
			if (foo.size !== bar.size) {
				return false;
			}
			for (len of foo) {
				tmp = len;
				if (tmp && typeof tmp === 'object') {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!bar.has(tmp)) return false;
			}
			return true;
		}

		if (ctor === Map) {
			if (foo.size !== bar.size) {
				return false;
			}
			for (len of foo) {
				tmp = len[0];
				if (tmp && typeof tmp === 'object') {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!dequal(len[1], bar.get(tmp))) {
					return false;
				}
			}
			return true;
		}

		if (ctor === ArrayBuffer) {
			foo = new Uint8Array(foo);
			bar = new Uint8Array(bar);
		} else if (ctor === DataView) {
			if ((len=foo.byteLength) === bar.byteLength) {
				while (len-- && foo.getInt8(len) === bar.getInt8(len));
			}
			return len === -1;
		}

		if (ArrayBuffer.isView(foo)) {
			if ((len=foo.byteLength) === bar.byteLength) {
				while (len-- && foo[len] === bar[len]);
			}
			return len === -1;
		}

		if (!ctor || typeof foo === 'object') {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}

	return foo !== foo && bar !== bar;
}

const Model3D_svelte_svelte_type_style_lang = '';

const {
	SvelteComponent: SvelteComponent$2,
	add_flush_callback: add_flush_callback$1,
	append: append$1,
	attr: attr$1,
	bind: bind$1,
	binding_callbacks: binding_callbacks$1,
	check_outros: check_outros$2,
	construct_svelte_component: construct_svelte_component$1,
	create_component: create_component$2,
	destroy_component: destroy_component$2,
	detach: detach$2,
	element: element$1,
	empty: empty$2,
	group_outros: group_outros$2,
	init: init$2,
	insert: insert$2,
	mount_component: mount_component$2,
	noop,
	safe_not_equal: safe_not_equal$2,
	space: space$2,
	transition_in: transition_in$2,
	transition_out: transition_out$2
} = window.__gradio__svelte__internal;
function create_if_block$2(ctx) {
	let div1;
	let div0;
	let t0;
	let a;
	let iconbutton;
	let a_download_value;
	let t1;
	let current_block_type_index;
	let if_block1;
	let current;
	let if_block0 = !/*use_3dgs*/ ctx[8] && create_if_block_2(ctx);

	iconbutton = new IconButton({
			props: {
				Icon: Download,
				label: /*i18n*/ ctx[4]("common.download")
			}
		});

	const if_block_creators = [create_if_block_1$2, create_else_block$2];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*use_3dgs*/ ctx[8]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			div1 = element$1("div");
			div0 = element$1("div");
			if (if_block0) if_block0.c();
			t0 = space$2();
			a = element$1("a");
			create_component$2(iconbutton.$$.fragment);
			t1 = space$2();
			if_block1.c();
			attr$1(a, "href", /*resolved_url*/ ctx[12]);
			attr$1(a, "target", window.__is_colab__ ? "_blank" : null);

			attr$1(a, "download", a_download_value = window.__is_colab__
			? null
			: /*value*/ ctx[0].orig_name || /*value*/ ctx[0].path);

			attr$1(div0, "class", "buttons svelte-8r2c23");
			attr$1(div1, "class", "model3D svelte-8r2c23");
		},
		m(target, anchor) {
			insert$2(target, div1, anchor);
			append$1(div1, div0);
			if (if_block0) if_block0.m(div0, null);
			append$1(div0, t0);
			append$1(div0, a);
			mount_component$2(iconbutton, a, null);
			append$1(div1, t1);
			if_blocks[current_block_type_index].m(div1, null);
			current = true;
		},
		p(ctx, dirty) {
			if (!/*use_3dgs*/ ctx[8]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*use_3dgs*/ 256) {
						transition_in$2(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					transition_in$2(if_block0, 1);
					if_block0.m(div0, t0);
				}
			} else if (if_block0) {
				group_outros$2();

				transition_out$2(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros$2();
			}

			const iconbutton_changes = {};
			if (dirty & /*i18n*/ 16) iconbutton_changes.label = /*i18n*/ ctx[4]("common.download");
			iconbutton.$set(iconbutton_changes);

			if (!current || dirty & /*resolved_url*/ 4096) {
				attr$1(a, "href", /*resolved_url*/ ctx[12]);
			}

			if (!current || dirty & /*value*/ 1 && a_download_value !== (a_download_value = window.__is_colab__
			? null
			: /*value*/ ctx[0].orig_name || /*value*/ ctx[0].path)) {
				attr$1(a, "download", a_download_value);
			}

			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros$2();

				transition_out$2(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros$2();
				if_block1 = if_blocks[current_block_type_index];

				if (!if_block1) {
					if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block1.c();
				} else {
					if_block1.p(ctx, dirty);
				}

				transition_in$2(if_block1, 1);
				if_block1.m(div1, null);
			}
		},
		i(local) {
			if (current) return;
			transition_in$2(if_block0);
			transition_in$2(iconbutton.$$.fragment, local);
			transition_in$2(if_block1);
			current = true;
		},
		o(local) {
			transition_out$2(if_block0);
			transition_out$2(iconbutton.$$.fragment, local);
			transition_out$2(if_block1);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach$2(div1);
			}

			if (if_block0) if_block0.d();
			destroy_component$2(iconbutton);
			if_blocks[current_block_type_index].d();
		}
	};
}

// (65:3) {#if !use_3dgs}
function create_if_block_2(ctx) {
	let iconbutton;
	let current;
	iconbutton = new IconButton({ props: { Icon: Undo, label: "Undo" } });
	iconbutton.$on("click", /*click_handler*/ ctx[15]);

	return {
		c() {
			create_component$2(iconbutton.$$.fragment);
		},
		m(target, anchor) {
			mount_component$2(iconbutton, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in$2(iconbutton.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out$2(iconbutton.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component$2(iconbutton, detaching);
		}
	};
}

// (86:2) {:else}
function create_else_block$2(ctx) {
	let switch_instance;
	let updating_resolved_url;
	let switch_instance_anchor;
	let current;

	function switch_instance_resolved_url_binding_1(value) {
		/*switch_instance_resolved_url_binding_1*/ ctx[18](value);
	}

	var switch_value = /*Canvas3DComponent*/ ctx[11];

	function switch_props(ctx, dirty) {
		let switch_instance_props = {
			value: /*value*/ ctx[0],
			clear_color: /*clear_color*/ ctx[1],
			camera_position: /*camera_position*/ ctx[7],
			zoom_speed: /*zoom_speed*/ ctx[5],
			pan_speed: /*pan_speed*/ ctx[6]
		};

		if (/*resolved_url*/ ctx[12] !== void 0) {
			switch_instance_props.resolved_url = /*resolved_url*/ ctx[12];
		}

		return { props: switch_instance_props };
	}

	if (switch_value) {
		switch_instance = construct_svelte_component$1(switch_value, switch_props(ctx));
		/*switch_instance_binding*/ ctx[17](switch_instance);
		binding_callbacks$1.push(() => bind$1(switch_instance, 'resolved_url', switch_instance_resolved_url_binding_1));
	}

	return {
		c() {
			if (switch_instance) create_component$2(switch_instance.$$.fragment);
			switch_instance_anchor = empty$2();
		},
		m(target, anchor) {
			if (switch_instance) mount_component$2(switch_instance, target, anchor);
			insert$2(target, switch_instance_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*Canvas3DComponent*/ 2048 && switch_value !== (switch_value = /*Canvas3DComponent*/ ctx[11])) {
				if (switch_instance) {
					group_outros$2();
					const old_component = switch_instance;

					transition_out$2(old_component.$$.fragment, 1, 0, () => {
						destroy_component$2(old_component, 1);
					});

					check_outros$2();
				}

				if (switch_value) {
					switch_instance = construct_svelte_component$1(switch_value, switch_props(ctx));
					/*switch_instance_binding*/ ctx[17](switch_instance);
					binding_callbacks$1.push(() => bind$1(switch_instance, 'resolved_url', switch_instance_resolved_url_binding_1));
					create_component$2(switch_instance.$$.fragment);
					transition_in$2(switch_instance.$$.fragment, 1);
					mount_component$2(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				const switch_instance_changes = {};
				if (dirty & /*value*/ 1) switch_instance_changes.value = /*value*/ ctx[0];
				if (dirty & /*clear_color*/ 2) switch_instance_changes.clear_color = /*clear_color*/ ctx[1];
				if (dirty & /*camera_position*/ 128) switch_instance_changes.camera_position = /*camera_position*/ ctx[7];
				if (dirty & /*zoom_speed*/ 32) switch_instance_changes.zoom_speed = /*zoom_speed*/ ctx[5];
				if (dirty & /*pan_speed*/ 64) switch_instance_changes.pan_speed = /*pan_speed*/ ctx[6];

				if (!updating_resolved_url && dirty & /*resolved_url*/ 4096) {
					updating_resolved_url = true;
					switch_instance_changes.resolved_url = /*resolved_url*/ ctx[12];
					add_flush_callback$1(() => updating_resolved_url = false);
				}

				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in$2(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out$2(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach$2(switch_instance_anchor);
			}

			/*switch_instance_binding*/ ctx[17](null);
			if (switch_instance) destroy_component$2(switch_instance, detaching);
		}
	};
}

// (78:2) {#if use_3dgs}
function create_if_block_1$2(ctx) {
	let switch_instance;
	let updating_resolved_url;
	let switch_instance_anchor;
	let current;

	function switch_instance_resolved_url_binding(value) {
		/*switch_instance_resolved_url_binding*/ ctx[16](value);
	}

	var switch_value = /*Canvas3DGSComponent*/ ctx[10];

	function switch_props(ctx, dirty) {
		let switch_instance_props = {
			value: /*value*/ ctx[0],
			zoom_speed: /*zoom_speed*/ ctx[5],
			pan_speed: /*pan_speed*/ ctx[6]
		};

		if (/*resolved_url*/ ctx[12] !== void 0) {
			switch_instance_props.resolved_url = /*resolved_url*/ ctx[12];
		}

		return { props: switch_instance_props };
	}

	if (switch_value) {
		switch_instance = construct_svelte_component$1(switch_value, switch_props(ctx));
		binding_callbacks$1.push(() => bind$1(switch_instance, 'resolved_url', switch_instance_resolved_url_binding));
	}

	return {
		c() {
			if (switch_instance) create_component$2(switch_instance.$$.fragment);
			switch_instance_anchor = empty$2();
		},
		m(target, anchor) {
			if (switch_instance) mount_component$2(switch_instance, target, anchor);
			insert$2(target, switch_instance_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*Canvas3DGSComponent*/ 1024 && switch_value !== (switch_value = /*Canvas3DGSComponent*/ ctx[10])) {
				if (switch_instance) {
					group_outros$2();
					const old_component = switch_instance;

					transition_out$2(old_component.$$.fragment, 1, 0, () => {
						destroy_component$2(old_component, 1);
					});

					check_outros$2();
				}

				if (switch_value) {
					switch_instance = construct_svelte_component$1(switch_value, switch_props(ctx));
					binding_callbacks$1.push(() => bind$1(switch_instance, 'resolved_url', switch_instance_resolved_url_binding));
					create_component$2(switch_instance.$$.fragment);
					transition_in$2(switch_instance.$$.fragment, 1);
					mount_component$2(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				const switch_instance_changes = {};
				if (dirty & /*value*/ 1) switch_instance_changes.value = /*value*/ ctx[0];
				if (dirty & /*zoom_speed*/ 32) switch_instance_changes.zoom_speed = /*zoom_speed*/ ctx[5];
				if (dirty & /*pan_speed*/ 64) switch_instance_changes.pan_speed = /*pan_speed*/ ctx[6];

				if (!updating_resolved_url && dirty & /*resolved_url*/ 4096) {
					updating_resolved_url = true;
					switch_instance_changes.resolved_url = /*resolved_url*/ ctx[12];
					add_flush_callback$1(() => updating_resolved_url = false);
				}

				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in$2(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out$2(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach$2(switch_instance_anchor);
			}

			if (switch_instance) destroy_component$2(switch_instance, detaching);
		}
	};
}

function create_fragment$2(ctx) {
	let blocklabel;
	let t;
	let if_block_anchor;
	let current;

	blocklabel = new BlockLabel({
			props: {
				show_label: /*show_label*/ ctx[3],
				Icon: File,
				label: /*label*/ ctx[2] || /*i18n*/ ctx[4]("3D_model.3d_model")
			}
		});

	let if_block = /*value*/ ctx[0] && create_if_block$2(ctx);

	return {
		c() {
			create_component$2(blocklabel.$$.fragment);
			t = space$2();
			if (if_block) if_block.c();
			if_block_anchor = empty$2();
		},
		m(target, anchor) {
			mount_component$2(blocklabel, target, anchor);
			insert$2(target, t, anchor);
			if (if_block) if_block.m(target, anchor);
			insert$2(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const blocklabel_changes = {};
			if (dirty & /*show_label*/ 8) blocklabel_changes.show_label = /*show_label*/ ctx[3];
			if (dirty & /*label, i18n*/ 20) blocklabel_changes.label = /*label*/ ctx[2] || /*i18n*/ ctx[4]("3D_model.3d_model");
			blocklabel.$set(blocklabel_changes);

			if (/*value*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*value*/ 1) {
						transition_in$2(if_block, 1);
					}
				} else {
					if_block = create_if_block$2(ctx);
					if_block.c();
					transition_in$2(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros$2();

				transition_out$2(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros$2();
			}
		},
		i(local) {
			if (current) return;
			transition_in$2(blocklabel.$$.fragment, local);
			transition_in$2(if_block);
			current = true;
		},
		o(local) {
			transition_out$2(blocklabel.$$.fragment, local);
			transition_out$2(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach$2(t);
				detach$2(if_block_anchor);
			}

			destroy_component$2(blocklabel, detaching);
			if (if_block) if_block.d(detaching);
		}
	};
}

async function loadCanvas3D$1() {
	const module = await __vitePreload(() => import('./Canvas3D-c0446f15.js'),true?["./Canvas3D-c0446f15.js","./Index-3b1865e7.js","./index-ec890757.js","./index-87ad2184.css","./Index-eb210efd.css","./file-url-fbb30a3f.js"]:void 0,import.meta.url);
	return module.default;
}

async function loadCanvas3DGS$1() {
	const module = await __vitePreload(() => import('./Canvas3DGS-0f30aa8f.js'),true?["./Canvas3DGS-0f30aa8f.js","./file-url-fbb30a3f.js","./Index-3b1865e7.js","./index-ec890757.js","./index-87ad2184.css","./Index-eb210efd.css"]:void 0,import.meta.url);
	return module.default;
}

function instance$2($$self, $$props, $$invalidate) {
	let { value } = $$props;
	let { clear_color = [0, 0, 0, 0] } = $$props;
	let { label = "" } = $$props;
	let { show_label } = $$props;
	let { i18n } = $$props;
	let { zoom_speed = 1 } = $$props;
	let { pan_speed = 1 } = $$props;
	let { camera_position = [null, null, null] } = $$props;
	let current_settings = { camera_position, zoom_speed, pan_speed };
	let use_3dgs = false;
	let Canvas3DGSComponent;
	let Canvas3DComponent;
	let canvas3d;

	function handle_undo() {
		canvas3d?.reset_camera_position(camera_position, zoom_speed, pan_speed);
	}

	let resolved_url;
	const click_handler = () => handle_undo();

	function switch_instance_resolved_url_binding(value) {
		resolved_url = value;
		$$invalidate(12, resolved_url);
	}

	function switch_instance_binding($$value) {
		binding_callbacks$1[$$value ? 'unshift' : 'push'](() => {
			canvas3d = $$value;
			$$invalidate(9, canvas3d);
		});
	}

	function switch_instance_resolved_url_binding_1(value) {
		resolved_url = value;
		$$invalidate(12, resolved_url);
	}

	$$self.$$set = $$props => {
		if ('value' in $$props) $$invalidate(0, value = $$props.value);
		if ('clear_color' in $$props) $$invalidate(1, clear_color = $$props.clear_color);
		if ('label' in $$props) $$invalidate(2, label = $$props.label);
		if ('show_label' in $$props) $$invalidate(3, show_label = $$props.show_label);
		if ('i18n' in $$props) $$invalidate(4, i18n = $$props.i18n);
		if ('zoom_speed' in $$props) $$invalidate(5, zoom_speed = $$props.zoom_speed);
		if ('pan_speed' in $$props) $$invalidate(6, pan_speed = $$props.pan_speed);
		if ('camera_position' in $$props) $$invalidate(7, camera_position = $$props.camera_position);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*value, use_3dgs*/ 257) {
			if (value) {
				$$invalidate(8, use_3dgs = value.path.endsWith(".splat") || value.path.endsWith(".ply"));

				if (use_3dgs) {
					loadCanvas3DGS$1().then(component => {
						$$invalidate(10, Canvas3DGSComponent = component);
					});
				} else {
					loadCanvas3D$1().then(component => {
						$$invalidate(11, Canvas3DComponent = component);
					});
				}
			}
		}

		if ($$self.$$.dirty & /*current_settings, camera_position, zoom_speed, pan_speed, canvas3d*/ 17120) {
			{
				if (!dequal(current_settings.camera_position, camera_position) || current_settings.zoom_speed !== zoom_speed || current_settings.pan_speed !== pan_speed) {
					canvas3d?.reset_camera_position(camera_position, zoom_speed, pan_speed);
					$$invalidate(14, current_settings = { camera_position, zoom_speed, pan_speed });
				}
			}
		}
	};

	return [
		value,
		clear_color,
		label,
		show_label,
		i18n,
		zoom_speed,
		pan_speed,
		camera_position,
		use_3dgs,
		canvas3d,
		Canvas3DGSComponent,
		Canvas3DComponent,
		resolved_url,
		handle_undo,
		current_settings,
		click_handler,
		switch_instance_resolved_url_binding,
		switch_instance_binding,
		switch_instance_resolved_url_binding_1
	];
}

class Model3D extends SvelteComponent$2 {
	constructor(options) {
		super();

		init$2(this, options, instance$2, create_fragment$2, safe_not_equal$2, {
			value: 0,
			clear_color: 1,
			label: 2,
			show_label: 3,
			i18n: 4,
			zoom_speed: 5,
			pan_speed: 6,
			camera_position: 7
		});
	}
}

const Model3D$1 = Model3D;

const Model3DUpload_svelte_svelte_type_style_lang = '';

const {
	SvelteComponent: SvelteComponent$1,
	add_flush_callback,
	append,
	attr,
	bind,
	binding_callbacks,
	check_outros: check_outros$1,
	construct_svelte_component,
	create_component: create_component$1,
	create_slot,
	destroy_component: destroy_component$1,
	detach: detach$1,
	element,
	empty: empty$1,
	get_all_dirty_from_scope,
	get_slot_changes,
	group_outros: group_outros$1,
	init: init$1,
	insert: insert$1,
	mount_component: mount_component$1,
	safe_not_equal: safe_not_equal$1,
	space: space$1,
	transition_in: transition_in$1,
	transition_out: transition_out$1,
	update_slot_base
} = window.__gradio__svelte__internal;
const { createEventDispatcher, tick } = window.__gradio__svelte__internal;
function create_else_block$1(ctx) {
	let div;
	let modifyupload;
	let t;
	let current_block_type_index;
	let if_block;
	let current;

	modifyupload = new ModifyUpload({
			props: {
				undoable: !/*use_3dgs*/ ctx[9],
				i18n: /*i18n*/ ctx[5],
				absolute: true
			}
		});

	modifyupload.$on("clear", /*handle_clear*/ ctx[15]);
	modifyupload.$on("undo", /*handle_undo*/ ctx[16]);
	const if_block_creators = [create_if_block_1$1, create_else_block_1$1];
	const if_blocks = [];

	function select_block_type_1(ctx, dirty) {
		if (/*use_3dgs*/ ctx[9]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type_1(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			div = element("div");
			create_component$1(modifyupload.$$.fragment);
			t = space$1();
			if_block.c();
			attr(div, "class", "input-model svelte-hvduv8");
		},
		m(target, anchor) {
			insert$1(target, div, anchor);
			mount_component$1(modifyupload, div, null);
			append(div, t);
			if_blocks[current_block_type_index].m(div, null);
			current = true;
		},
		p(ctx, dirty) {
			const modifyupload_changes = {};
			if (dirty & /*use_3dgs*/ 512) modifyupload_changes.undoable = !/*use_3dgs*/ ctx[9];
			if (dirty & /*i18n*/ 32) modifyupload_changes.i18n = /*i18n*/ ctx[5];
			modifyupload.$set(modifyupload_changes);
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type_1(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros$1();

				transition_out$1(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros$1();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in$1(if_block, 1);
				if_block.m(div, null);
			}
		},
		i(local) {
			if (current) return;
			transition_in$1(modifyupload.$$.fragment, local);
			transition_in$1(if_block);
			current = true;
		},
		o(local) {
			transition_out$1(modifyupload.$$.fragment, local);
			transition_out$1(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach$1(div);
			}

			destroy_component$1(modifyupload);
			if_blocks[current_block_type_index].d();
		}
	};
}

// (66:0) {#if value === null}
function create_if_block$1(ctx) {
	let upload;
	let updating_dragging;
	let current;

	function upload_dragging_binding(value) {
		/*upload_dragging_binding*/ ctx[18](value);
	}

	let upload_props = {
		root: /*root*/ ctx[4],
		filetype: [".stl", ".obj", ".gltf", ".glb", "model/obj", ".splat", ".ply"],
		$$slots: { default: [create_default_slot$1] },
		$$scope: { ctx }
	};

	if (/*dragging*/ ctx[10] !== void 0) {
		upload_props.dragging = /*dragging*/ ctx[10];
	}

	upload = new Upload({ props: upload_props });
	binding_callbacks.push(() => bind(upload, 'dragging', upload_dragging_binding));
	upload.$on("load", /*handle_upload*/ ctx[14]);

	return {
		c() {
			create_component$1(upload.$$.fragment);
		},
		m(target, anchor) {
			mount_component$1(upload, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const upload_changes = {};
			if (dirty & /*root*/ 16) upload_changes.root = /*root*/ ctx[4];

			if (dirty & /*$$scope*/ 1048576) {
				upload_changes.$$scope = { dirty, ctx };
			}

			if (!updating_dragging && dirty & /*dragging*/ 1024) {
				updating_dragging = true;
				upload_changes.dragging = /*dragging*/ ctx[10];
				add_flush_callback(() => updating_dragging = false);
			}

			upload.$set(upload_changes);
		},
		i(local) {
			if (current) return;
			transition_in$1(upload.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out$1(upload.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component$1(upload, detaching);
		}
	};
}

// (92:2) {:else}
function create_else_block_1$1(ctx) {
	let switch_instance;
	let switch_instance_anchor;
	let current;
	var switch_value = /*Canvas3DComponent*/ ctx[12];

	function switch_props(ctx, dirty) {
		let switch_instance_props = {
			value: /*value*/ ctx[0],
			clear_color: /*clear_color*/ ctx[1],
			camera_position: /*camera_position*/ ctx[8],
			zoom_speed: /*zoom_speed*/ ctx[6],
			pan_speed: /*pan_speed*/ ctx[7]
		};

		return { props: switch_instance_props };
	}

	if (switch_value) {
		switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
		/*switch_instance_binding*/ ctx[19](switch_instance);
	}

	return {
		c() {
			if (switch_instance) create_component$1(switch_instance.$$.fragment);
			switch_instance_anchor = empty$1();
		},
		m(target, anchor) {
			if (switch_instance) mount_component$1(switch_instance, target, anchor);
			insert$1(target, switch_instance_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*Canvas3DComponent*/ 4096 && switch_value !== (switch_value = /*Canvas3DComponent*/ ctx[12])) {
				if (switch_instance) {
					group_outros$1();
					const old_component = switch_instance;

					transition_out$1(old_component.$$.fragment, 1, 0, () => {
						destroy_component$1(old_component, 1);
					});

					check_outros$1();
				}

				if (switch_value) {
					switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
					/*switch_instance_binding*/ ctx[19](switch_instance);
					create_component$1(switch_instance.$$.fragment);
					transition_in$1(switch_instance.$$.fragment, 1);
					mount_component$1(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				const switch_instance_changes = {};
				if (dirty & /*value*/ 1) switch_instance_changes.value = /*value*/ ctx[0];
				if (dirty & /*clear_color*/ 2) switch_instance_changes.clear_color = /*clear_color*/ ctx[1];
				if (dirty & /*camera_position*/ 256) switch_instance_changes.camera_position = /*camera_position*/ ctx[8];
				if (dirty & /*zoom_speed*/ 64) switch_instance_changes.zoom_speed = /*zoom_speed*/ ctx[6];
				if (dirty & /*pan_speed*/ 128) switch_instance_changes.pan_speed = /*pan_speed*/ ctx[7];
				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in$1(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out$1(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach$1(switch_instance_anchor);
			}

			/*switch_instance_binding*/ ctx[19](null);
			if (switch_instance) destroy_component$1(switch_instance, detaching);
		}
	};
}

// (85:2) {#if use_3dgs}
function create_if_block_1$1(ctx) {
	let switch_instance;
	let switch_instance_anchor;
	let current;
	var switch_value = /*Canvas3DGSComponent*/ ctx[11];

	function switch_props(ctx, dirty) {
		return {
			props: {
				value: /*value*/ ctx[0],
				zoom_speed: /*zoom_speed*/ ctx[6],
				pan_speed: /*pan_speed*/ ctx[7]
			}
		};
	}

	if (switch_value) {
		switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
	}

	return {
		c() {
			if (switch_instance) create_component$1(switch_instance.$$.fragment);
			switch_instance_anchor = empty$1();
		},
		m(target, anchor) {
			if (switch_instance) mount_component$1(switch_instance, target, anchor);
			insert$1(target, switch_instance_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*Canvas3DGSComponent*/ 2048 && switch_value !== (switch_value = /*Canvas3DGSComponent*/ ctx[11])) {
				if (switch_instance) {
					group_outros$1();
					const old_component = switch_instance;

					transition_out$1(old_component.$$.fragment, 1, 0, () => {
						destroy_component$1(old_component, 1);
					});

					check_outros$1();
				}

				if (switch_value) {
					switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
					create_component$1(switch_instance.$$.fragment);
					transition_in$1(switch_instance.$$.fragment, 1);
					mount_component$1(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				const switch_instance_changes = {};
				if (dirty & /*value*/ 1) switch_instance_changes.value = /*value*/ ctx[0];
				if (dirty & /*zoom_speed*/ 64) switch_instance_changes.zoom_speed = /*zoom_speed*/ ctx[6];
				if (dirty & /*pan_speed*/ 128) switch_instance_changes.pan_speed = /*pan_speed*/ ctx[7];
				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in$1(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out$1(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach$1(switch_instance_anchor);
			}

			if (switch_instance) destroy_component$1(switch_instance, detaching);
		}
	};
}

// (67:1) <Upload   on:load={handle_upload}   {root}   filetype={[".stl", ".obj", ".gltf", ".glb", "model/obj", ".splat", ".ply"]}   bind:dragging  >
function create_default_slot$1(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[17].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[20], null);

	return {
		c() {
			if (default_slot) default_slot.c();
		},
		m(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 1048576)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[20],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[20])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[20], dirty, null),
						null
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in$1(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out$1(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function create_fragment$1(ctx) {
	let blocklabel;
	let t;
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;

	blocklabel = new BlockLabel({
			props: {
				show_label: /*show_label*/ ctx[3],
				Icon: File,
				label: /*label*/ ctx[2] || "3D Model"
			}
		});

	const if_block_creators = [create_if_block$1, create_else_block$1];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*value*/ ctx[0] === null) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			create_component$1(blocklabel.$$.fragment);
			t = space$1();
			if_block.c();
			if_block_anchor = empty$1();
		},
		m(target, anchor) {
			mount_component$1(blocklabel, target, anchor);
			insert$1(target, t, anchor);
			if_blocks[current_block_type_index].m(target, anchor);
			insert$1(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const blocklabel_changes = {};
			if (dirty & /*show_label*/ 8) blocklabel_changes.show_label = /*show_label*/ ctx[3];
			if (dirty & /*label*/ 4) blocklabel_changes.label = /*label*/ ctx[2] || "3D Model";
			blocklabel.$set(blocklabel_changes);
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros$1();

				transition_out$1(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros$1();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in$1(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i(local) {
			if (current) return;
			transition_in$1(blocklabel.$$.fragment, local);
			transition_in$1(if_block);
			current = true;
		},
		o(local) {
			transition_out$1(blocklabel.$$.fragment, local);
			transition_out$1(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach$1(t);
				detach$1(if_block_anchor);
			}

			destroy_component$1(blocklabel, detaching);
			if_blocks[current_block_type_index].d(detaching);
		}
	};
}

async function loadCanvas3D() {
	const module = await __vitePreload(() => import('./Canvas3D-c0446f15.js'),true?["./Canvas3D-c0446f15.js","./Index-3b1865e7.js","./index-ec890757.js","./index-87ad2184.css","./Index-eb210efd.css","./file-url-fbb30a3f.js"]:void 0,import.meta.url);
	return module.default;
}

async function loadCanvas3DGS() {
	const module = await __vitePreload(() => import('./Canvas3DGS-0f30aa8f.js'),true?["./Canvas3DGS-0f30aa8f.js","./file-url-fbb30a3f.js","./Index-3b1865e7.js","./index-ec890757.js","./index-87ad2184.css","./Index-eb210efd.css"]:void 0,import.meta.url);
	return module.default;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { value } = $$props;
	let { clear_color = [0, 0, 0, 0] } = $$props;
	let { label = "" } = $$props;
	let { show_label } = $$props;
	let { root } = $$props;
	let { i18n } = $$props;
	let { zoom_speed = 1 } = $$props;
	let { pan_speed = 1 } = $$props;
	let { camera_position = [null, null, null] } = $$props;

	async function handle_upload({ detail }) {
		$$invalidate(0, value = detail);
		await tick();
		dispatch("change", value);
		dispatch("load", value);
	}

	async function handle_clear() {
		$$invalidate(0, value = null);
		await tick();
		dispatch("clear");
		dispatch("change");
	}

	let use_3dgs = false;
	let Canvas3DGSComponent;
	let Canvas3DComponent;
	let canvas3d;

	async function handle_undo() {
		canvas3d?.reset_camera_position(camera_position, zoom_speed, pan_speed);
	}

	const dispatch = createEventDispatcher();
	let dragging = false;

	function upload_dragging_binding(value) {
		dragging = value;
		$$invalidate(10, dragging);
	}

	function switch_instance_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			canvas3d = $$value;
			$$invalidate(13, canvas3d);
		});
	}

	$$self.$$set = $$props => {
		if ('value' in $$props) $$invalidate(0, value = $$props.value);
		if ('clear_color' in $$props) $$invalidate(1, clear_color = $$props.clear_color);
		if ('label' in $$props) $$invalidate(2, label = $$props.label);
		if ('show_label' in $$props) $$invalidate(3, show_label = $$props.show_label);
		if ('root' in $$props) $$invalidate(4, root = $$props.root);
		if ('i18n' in $$props) $$invalidate(5, i18n = $$props.i18n);
		if ('zoom_speed' in $$props) $$invalidate(6, zoom_speed = $$props.zoom_speed);
		if ('pan_speed' in $$props) $$invalidate(7, pan_speed = $$props.pan_speed);
		if ('camera_position' in $$props) $$invalidate(8, camera_position = $$props.camera_position);
		if ('$$scope' in $$props) $$invalidate(20, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*value, use_3dgs*/ 513) {
			if (value) {
				$$invalidate(9, use_3dgs = value.path.endsWith(".splat") || value.path.endsWith(".ply"));

				if (use_3dgs) {
					loadCanvas3DGS().then(component => {
						$$invalidate(11, Canvas3DGSComponent = component);
					});
				} else {
					loadCanvas3D().then(component => {
						$$invalidate(12, Canvas3DComponent = component);
					});
				}
			}
		}

		if ($$self.$$.dirty & /*dragging*/ 1024) {
			dispatch("drag", dragging);
		}
	};

	return [
		value,
		clear_color,
		label,
		show_label,
		root,
		i18n,
		zoom_speed,
		pan_speed,
		camera_position,
		use_3dgs,
		dragging,
		Canvas3DGSComponent,
		Canvas3DComponent,
		canvas3d,
		handle_upload,
		handle_clear,
		handle_undo,
		slots,
		upload_dragging_binding,
		switch_instance_binding,
		$$scope
	];
}

class Model3DUpload extends SvelteComponent$1 {
	constructor(options) {
		super();

		init$1(this, options, instance$1, create_fragment$1, safe_not_equal$1, {
			value: 0,
			clear_color: 1,
			label: 2,
			show_label: 3,
			root: 4,
			i18n: 5,
			zoom_speed: 6,
			pan_speed: 7,
			camera_position: 8
		});
	}
}

const Model3DUpload$1 = Model3DUpload;

/* home/runner/work/gradio/gradio/js/model3D/Index.svelte generated by Svelte v4.2.2 */
const {
	SvelteComponent,
	assign,
	check_outros,
	create_component,
	destroy_component,
	detach,
	empty,
	get_spread_object,
	get_spread_update,
	group_outros,
	init,
	insert,
	mount_component,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} = window.__gradio__svelte__internal;
function create_else_block_1(ctx) {
	let block;
	let current;

	block = new Block({
			props: {
				visible: /*visible*/ ctx[3],
				variant: /*value*/ ctx[0] === null ? "dashed" : "solid",
				border_mode: /*dragging*/ ctx[17] ? "focus" : "base",
				padding: false,
				elem_id: /*elem_id*/ ctx[1],
				elem_classes: /*elem_classes*/ ctx[2],
				container: /*container*/ ctx[9],
				scale: /*scale*/ ctx[10],
				min_width: /*min_width*/ ctx[11],
				height: /*height*/ ctx[13],
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(block.$$.fragment);
		},
		m(target, anchor) {
			mount_component(block, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const block_changes = {};
			if (dirty & /*visible*/ 8) block_changes.visible = /*visible*/ ctx[3];
			if (dirty & /*value*/ 1) block_changes.variant = /*value*/ ctx[0] === null ? "dashed" : "solid";
			if (dirty & /*dragging*/ 131072) block_changes.border_mode = /*dragging*/ ctx[17] ? "focus" : "base";
			if (dirty & /*elem_id*/ 2) block_changes.elem_id = /*elem_id*/ ctx[1];
			if (dirty & /*elem_classes*/ 4) block_changes.elem_classes = /*elem_classes*/ ctx[2];
			if (dirty & /*container*/ 512) block_changes.container = /*container*/ ctx[9];
			if (dirty & /*scale*/ 1024) block_changes.scale = /*scale*/ ctx[10];
			if (dirty & /*min_width*/ 2048) block_changes.min_width = /*min_width*/ ctx[11];
			if (dirty & /*height*/ 8192) block_changes.height = /*height*/ ctx[13];

			if (dirty & /*$$scope, label, show_label, root, clear_color, value, camera_position, zoom_speed, gradio, dragging, loading_status*/ 8573425) {
				block_changes.$$scope = { dirty, ctx };
			}

			block.$set(block_changes);
		},
		i(local) {
			if (current) return;
			transition_in(block.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(block.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(block, detaching);
		}
	};
}

// (36:0) {#if !interactive}
function create_if_block(ctx) {
	let block;
	let current;

	block = new Block({
			props: {
				visible: /*visible*/ ctx[3],
				variant: /*value*/ ctx[0] === null ? "dashed" : "solid",
				border_mode: /*dragging*/ ctx[17] ? "focus" : "base",
				padding: false,
				elem_id: /*elem_id*/ ctx[1],
				elem_classes: /*elem_classes*/ ctx[2],
				container: /*container*/ ctx[9],
				scale: /*scale*/ ctx[10],
				min_width: /*min_width*/ ctx[11],
				height: /*height*/ ctx[13],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(block.$$.fragment);
		},
		m(target, anchor) {
			mount_component(block, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const block_changes = {};
			if (dirty & /*visible*/ 8) block_changes.visible = /*visible*/ ctx[3];
			if (dirty & /*value*/ 1) block_changes.variant = /*value*/ ctx[0] === null ? "dashed" : "solid";
			if (dirty & /*dragging*/ 131072) block_changes.border_mode = /*dragging*/ ctx[17] ? "focus" : "base";
			if (dirty & /*elem_id*/ 2) block_changes.elem_id = /*elem_id*/ ctx[1];
			if (dirty & /*elem_classes*/ 4) block_changes.elem_classes = /*elem_classes*/ ctx[2];
			if (dirty & /*container*/ 512) block_changes.container = /*container*/ ctx[9];
			if (dirty & /*scale*/ 1024) block_changes.scale = /*scale*/ ctx[10];
			if (dirty & /*min_width*/ 2048) block_changes.min_width = /*min_width*/ ctx[11];
			if (dirty & /*height*/ 8192) block_changes.height = /*height*/ ctx[13];

			if (dirty & /*$$scope, value, gradio, clear_color, label, show_label, camera_position, zoom_speed, loading_status*/ 8442337) {
				block_changes.$$scope = { dirty, ctx };
			}

			block.$set(block_changes);
		},
		i(local) {
			if (current) return;
			transition_in(block.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(block.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(block, detaching);
		}
	};
}

// (93:2) <Model3DUpload    {label}    {show_label}    {root}    {clear_color}    {value}    {camera_position}    {zoom_speed}    on:change={({ detail }) => (value = detail)}    on:drag={({ detail }) => (dragging = detail)}    on:change={({ detail }) => gradio.dispatch("change", detail)}    on:clear={() => {     value = null;     gradio.dispatch("clear");    }}    on:load={({ detail }) => {     value = detail;     gradio.dispatch("upload");    }}    i18n={gradio.i18n}   >
function create_default_slot_3(ctx) {
	let uploadtext;
	let current;

	uploadtext = new UploadText({
			props: {
				i18n: /*gradio*/ ctx[12].i18n,
				type: "file"
			}
		});

	return {
		c() {
			create_component(uploadtext.$$.fragment);
		},
		m(target, anchor) {
			mount_component(uploadtext, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const uploadtext_changes = {};
			if (dirty & /*gradio*/ 4096) uploadtext_changes.i18n = /*gradio*/ ctx[12].i18n;
			uploadtext.$set(uploadtext_changes);
		},
		i(local) {
			if (current) return;
			transition_in(uploadtext.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(uploadtext.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(uploadtext, detaching);
		}
	};
}

// (75:1) <Block   {visible}   variant={value === null ? "dashed" : "solid"}   border_mode={dragging ? "focus" : "base"}   padding={false}   {elem_id}   {elem_classes}   {container}   {scale}   {min_width}   {height}  >
function create_default_slot_2(ctx) {
	let statustracker;
	let t;
	let model3dupload;
	let current;

	const statustracker_spread_levels = [
		{
			autoscroll: /*gradio*/ ctx[12].autoscroll
		},
		{ i18n: /*gradio*/ ctx[12].i18n },
		/*loading_status*/ ctx[6]
	];

	let statustracker_props = {};

	for (let i = 0; i < statustracker_spread_levels.length; i += 1) {
		statustracker_props = assign(statustracker_props, statustracker_spread_levels[i]);
	}

	statustracker = new Static({ props: statustracker_props });

	model3dupload = new Model3DUpload$1({
			props: {
				label: /*label*/ ctx[7],
				show_label: /*show_label*/ ctx[8],
				root: /*root*/ ctx[4],
				clear_color: /*clear_color*/ ctx[5],
				value: /*value*/ ctx[0],
				camera_position: /*camera_position*/ ctx[15],
				zoom_speed: /*zoom_speed*/ ctx[14],
				i18n: /*gradio*/ ctx[12].i18n,
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			}
		});

	model3dupload.$on("change", /*change_handler*/ ctx[18]);
	model3dupload.$on("drag", /*drag_handler*/ ctx[19]);
	model3dupload.$on("change", /*change_handler_1*/ ctx[20]);
	model3dupload.$on("clear", /*clear_handler*/ ctx[21]);
	model3dupload.$on("load", /*load_handler*/ ctx[22]);

	return {
		c() {
			create_component(statustracker.$$.fragment);
			t = space();
			create_component(model3dupload.$$.fragment);
		},
		m(target, anchor) {
			mount_component(statustracker, target, anchor);
			insert(target, t, anchor);
			mount_component(model3dupload, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const statustracker_changes = (dirty & /*gradio, loading_status*/ 4160)
			? get_spread_update(statustracker_spread_levels, [
					dirty & /*gradio*/ 4096 && {
						autoscroll: /*gradio*/ ctx[12].autoscroll
					},
					dirty & /*gradio*/ 4096 && { i18n: /*gradio*/ ctx[12].i18n },
					dirty & /*loading_status*/ 64 && get_spread_object(/*loading_status*/ ctx[6])
				])
			: {};

			statustracker.$set(statustracker_changes);
			const model3dupload_changes = {};
			if (dirty & /*label*/ 128) model3dupload_changes.label = /*label*/ ctx[7];
			if (dirty & /*show_label*/ 256) model3dupload_changes.show_label = /*show_label*/ ctx[8];
			if (dirty & /*root*/ 16) model3dupload_changes.root = /*root*/ ctx[4];
			if (dirty & /*clear_color*/ 32) model3dupload_changes.clear_color = /*clear_color*/ ctx[5];
			if (dirty & /*value*/ 1) model3dupload_changes.value = /*value*/ ctx[0];
			if (dirty & /*camera_position*/ 32768) model3dupload_changes.camera_position = /*camera_position*/ ctx[15];
			if (dirty & /*zoom_speed*/ 16384) model3dupload_changes.zoom_speed = /*zoom_speed*/ ctx[14];
			if (dirty & /*gradio*/ 4096) model3dupload_changes.i18n = /*gradio*/ ctx[12].i18n;

			if (dirty & /*$$scope, gradio*/ 8392704) {
				model3dupload_changes.$$scope = { dirty, ctx };
			}

			model3dupload.$set(model3dupload_changes);
		},
		i(local) {
			if (current) return;
			transition_in(statustracker.$$.fragment, local);
			transition_in(model3dupload.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(statustracker.$$.fragment, local);
			transition_out(model3dupload.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(t);
			}

			destroy_component(statustracker, detaching);
			destroy_component(model3dupload, detaching);
		}
	};
}

// (65:2) {:else}
function create_else_block(ctx) {
	let blocklabel;
	let t;
	let empty_1;
	let current;

	blocklabel = new BlockLabel({
			props: {
				show_label: /*show_label*/ ctx[8],
				Icon: File,
				label: /*label*/ ctx[7] || "3D Model"
			}
		});

	empty_1 = new Empty({
			props: {
				unpadded_box: true,
				size: "large",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(blocklabel.$$.fragment);
			t = space();
			create_component(empty_1.$$.fragment);
		},
		m(target, anchor) {
			mount_component(blocklabel, target, anchor);
			insert(target, t, anchor);
			mount_component(empty_1, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const blocklabel_changes = {};
			if (dirty & /*show_label*/ 256) blocklabel_changes.show_label = /*show_label*/ ctx[8];
			if (dirty & /*label*/ 128) blocklabel_changes.label = /*label*/ ctx[7] || "3D Model";
			blocklabel.$set(blocklabel_changes);
			const empty_1_changes = {};

			if (dirty & /*$$scope*/ 8388608) {
				empty_1_changes.$$scope = { dirty, ctx };
			}

			empty_1.$set(empty_1_changes);
		},
		i(local) {
			if (current) return;
			transition_in(blocklabel.$$.fragment, local);
			transition_in(empty_1.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(blocklabel.$$.fragment, local);
			transition_out(empty_1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(t);
			}

			destroy_component(blocklabel, detaching);
			destroy_component(empty_1, detaching);
		}
	};
}

// (55:2) {#if value}
function create_if_block_1(ctx) {
	let model3d;
	let current;

	model3d = new Model3D$1({
			props: {
				value: /*value*/ ctx[0],
				i18n: /*gradio*/ ctx[12].i18n,
				clear_color: /*clear_color*/ ctx[5],
				label: /*label*/ ctx[7],
				show_label: /*show_label*/ ctx[8],
				camera_position: /*camera_position*/ ctx[15],
				zoom_speed: /*zoom_speed*/ ctx[14]
			}
		});

	return {
		c() {
			create_component(model3d.$$.fragment);
		},
		m(target, anchor) {
			mount_component(model3d, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const model3d_changes = {};
			if (dirty & /*value*/ 1) model3d_changes.value = /*value*/ ctx[0];
			if (dirty & /*gradio*/ 4096) model3d_changes.i18n = /*gradio*/ ctx[12].i18n;
			if (dirty & /*clear_color*/ 32) model3d_changes.clear_color = /*clear_color*/ ctx[5];
			if (dirty & /*label*/ 128) model3d_changes.label = /*label*/ ctx[7];
			if (dirty & /*show_label*/ 256) model3d_changes.show_label = /*show_label*/ ctx[8];
			if (dirty & /*camera_position*/ 32768) model3d_changes.camera_position = /*camera_position*/ ctx[15];
			if (dirty & /*zoom_speed*/ 16384) model3d_changes.zoom_speed = /*zoom_speed*/ ctx[14];
			model3d.$set(model3d_changes);
		},
		i(local) {
			if (current) return;
			transition_in(model3d.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(model3d.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(model3d, detaching);
		}
	};
}

// (71:3) <Empty unpadded_box={true} size="large">
function create_default_slot_1(ctx) {
	let file;
	let current;
	file = new File({});

	return {
		c() {
			create_component(file.$$.fragment);
		},
		m(target, anchor) {
			mount_component(file, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			transition_in(file.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(file.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(file, detaching);
		}
	};
}

// (37:1) <Block   {visible}   variant={value === null ? "dashed" : "solid"}   border_mode={dragging ? "focus" : "base"}   padding={false}   {elem_id}   {elem_classes}   {container}   {scale}   {min_width}   {height}  >
function create_default_slot(ctx) {
	let statustracker;
	let t;
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;

	const statustracker_spread_levels = [
		{
			autoscroll: /*gradio*/ ctx[12].autoscroll
		},
		{ i18n: /*gradio*/ ctx[12].i18n },
		/*loading_status*/ ctx[6]
	];

	let statustracker_props = {};

	for (let i = 0; i < statustracker_spread_levels.length; i += 1) {
		statustracker_props = assign(statustracker_props, statustracker_spread_levels[i]);
	}

	statustracker = new Static({ props: statustracker_props });
	const if_block_creators = [create_if_block_1, create_else_block];
	const if_blocks = [];

	function select_block_type_1(ctx, dirty) {
		if (/*value*/ ctx[0]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type_1(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			create_component(statustracker.$$.fragment);
			t = space();
			if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			mount_component(statustracker, target, anchor);
			insert(target, t, anchor);
			if_blocks[current_block_type_index].m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const statustracker_changes = (dirty & /*gradio, loading_status*/ 4160)
			? get_spread_update(statustracker_spread_levels, [
					dirty & /*gradio*/ 4096 && {
						autoscroll: /*gradio*/ ctx[12].autoscroll
					},
					dirty & /*gradio*/ 4096 && { i18n: /*gradio*/ ctx[12].i18n },
					dirty & /*loading_status*/ 64 && get_spread_object(/*loading_status*/ ctx[6])
				])
			: {};

			statustracker.$set(statustracker_changes);
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type_1(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i(local) {
			if (current) return;
			transition_in(statustracker.$$.fragment, local);
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(statustracker.$$.fragment, local);
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(t);
				detach(if_block_anchor);
			}

			destroy_component(statustracker, detaching);
			if_blocks[current_block_type_index].d(detaching);
		}
	};
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_else_block_1];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (!/*interactive*/ ctx[16]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(if_block_anchor);
			}

			if_blocks[current_block_type_index].d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { elem_id = "" } = $$props;
	let { elem_classes = [] } = $$props;
	let { visible = true } = $$props;
	let { value = null } = $$props;
	let { root } = $$props;
	let { clear_color } = $$props;
	let { loading_status } = $$props;
	let { label } = $$props;
	let { show_label } = $$props;
	let { container = true } = $$props;
	let { scale = null } = $$props;
	let { min_width = undefined } = $$props;
	let { gradio } = $$props;
	let { height = undefined } = $$props;
	let { zoom_speed = 1 } = $$props;
	let { camera_position = [null, null, null] } = $$props;
	let { interactive } = $$props;
	let dragging = false;
	const change_handler = ({ detail }) => $$invalidate(0, value = detail);
	const drag_handler = ({ detail }) => $$invalidate(17, dragging = detail);
	const change_handler_1 = ({ detail }) => gradio.dispatch("change", detail);

	const clear_handler = () => {
		$$invalidate(0, value = null);
		gradio.dispatch("clear");
	};

	const load_handler = ({ detail }) => {
		$$invalidate(0, value = detail);
		gradio.dispatch("upload");
	};

	$$self.$$set = $$props => {
		if ('elem_id' in $$props) $$invalidate(1, elem_id = $$props.elem_id);
		if ('elem_classes' in $$props) $$invalidate(2, elem_classes = $$props.elem_classes);
		if ('visible' in $$props) $$invalidate(3, visible = $$props.visible);
		if ('value' in $$props) $$invalidate(0, value = $$props.value);
		if ('root' in $$props) $$invalidate(4, root = $$props.root);
		if ('clear_color' in $$props) $$invalidate(5, clear_color = $$props.clear_color);
		if ('loading_status' in $$props) $$invalidate(6, loading_status = $$props.loading_status);
		if ('label' in $$props) $$invalidate(7, label = $$props.label);
		if ('show_label' in $$props) $$invalidate(8, show_label = $$props.show_label);
		if ('container' in $$props) $$invalidate(9, container = $$props.container);
		if ('scale' in $$props) $$invalidate(10, scale = $$props.scale);
		if ('min_width' in $$props) $$invalidate(11, min_width = $$props.min_width);
		if ('gradio' in $$props) $$invalidate(12, gradio = $$props.gradio);
		if ('height' in $$props) $$invalidate(13, height = $$props.height);
		if ('zoom_speed' in $$props) $$invalidate(14, zoom_speed = $$props.zoom_speed);
		if ('camera_position' in $$props) $$invalidate(15, camera_position = $$props.camera_position);
		if ('interactive' in $$props) $$invalidate(16, interactive = $$props.interactive);
	};

	return [
		value,
		elem_id,
		elem_classes,
		visible,
		root,
		clear_color,
		loading_status,
		label,
		show_label,
		container,
		scale,
		min_width,
		gradio,
		height,
		zoom_speed,
		camera_position,
		interactive,
		dragging,
		change_handler,
		drag_handler,
		change_handler_1,
		clear_handler,
		load_handler
	];
}

class Index extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			elem_id: 1,
			elem_classes: 2,
			visible: 3,
			value: 0,
			root: 4,
			clear_color: 5,
			loading_status: 6,
			label: 7,
			show_label: 8,
			container: 9,
			scale: 10,
			min_width: 11,
			gradio: 12,
			height: 13,
			zoom_speed: 14,
			camera_position: 15,
			interactive: 16
		});
	}
}

export { Model3D$1 as BaseModel3D, Model3DUpload$1 as BaseModel3DUpload, Index as default };
//# sourceMappingURL=Index-a52db290.js.map
